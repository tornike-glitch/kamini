/**
 * GMT Biofireplaces - Admin Control Panel Logic
 * Real-time price management & Cloud DB Synchronization
 */

document.addEventListener("DOMContentLoaded", () => {
  let currentCategory = "all";
  let searchQuery = "";
  
  // Element references
  const tableBody = document.getElementById("admin-table-body");
  const searchInput = document.getElementById("admin-search");
  const categoryChips = document.getElementById("category-chips");
  const btnSaveCloud = document.getElementById("btn-save-cloud");
  const btnExportJson = document.getElementById("btn-export-json");
  const btnImportJson = document.getElementById("btn-import-json");
  const fileImportJson = document.getElementById("file-import-json");
  const rateGelInput = document.getElementById("rate-gel");
  const ratePlnInput = document.getElementById("rate-pln");

  const statTotal = document.getElementById("stat-total");
  const statPriced = document.getElementById("stat-priced");
  const statUnpriced = document.getElementById("stat-unpriced");
  const statLastSync = document.getElementById("stat-last-sync");
  const cloudStatusText = document.getElementById("cloud-status-text");

  // Local working copy of prices
  let workingPrices = { ...CloudStorageManager.priceMap };

  // Sync state update listener
  window.addEventListener("gmt:prices-updated", () => {
    workingPrices = { ...CloudStorageManager.priceMap };
    renderTable();
    updateStats();
  });

  // Render product table rows
  function renderTable() {
    tableBody.innerHTML = "";

    const filtered = PRODUCTS.filter(prod => {
      const matchCat = currentCategory === "all" || prod.category === currentCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch = !q || 
        (prod.nameGe && prod.nameGe.toLowerCase().includes(q)) ||
        (prod.nameEn && prod.nameEn.toLowerCase().includes(q)) ||
        (prod.id && prod.id.toLowerCase().includes(q)) ||
        (prod.ean && prod.ean.toLowerCase().includes(q));

      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align: center; padding: 3rem; color: #9ca3af;">
            პროდუქტი ვერ მოიძებნა.
          </td>
        </tr>`;
      return;
    }

    filtered.forEach(product => {
      const pData = workingPrices[product.id] || {};
      const gelVal = pData.gel !== undefined && pData.gel !== null ? pData.gel : "";
      const eurVal = pData.eur !== undefined && pData.eur !== null ? pData.eur : "";
      const plnVal = pData.pln !== undefined && pData.pln !== null ? pData.pln : "";

      const hasPrice = (gelVal !== "" && gelVal !== null) || (eurVal !== "" && eurVal !== null) || (plnVal !== "" && plnVal !== null);

      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>
          <img src="${product.image}" alt="${product.nameGe}" class="product-thumb" onerror="this.src='assets/hero.jpg'">
        </td>
        <td>
          <div class="product-meta-title">${product.nameGe}</div>
          <div class="product-meta-sub">KOD / SKU: <strong>${product.id}</strong> | EAN: ${product.ean || 'N/A'}</div>
        </td>
        <td>
          <div style="font-weight: 600; color: #d1d5db;">${getCategoryName(product.category)}</div>
          <div class="product-meta-sub">${product.dimensions || ''} ${product.weight ? '• ' + product.weight : ''}</div>
        </td>
        <td>
          ${hasPrice 
            ? '<span class="status-badge-priced">✓ ფასი მითითებულია</span>' 
            : '<span class="status-badge-unpriced">⚠ ცარიელია</span>'}
        </td>
        <td>
          <div class="price-input-group">
            <span class="currency-symbol">₾</span>
            <input type="number" step="1" class="price-input input-gel" data-id="${product.id}" value="${gelVal}" placeholder="—">
          </div>
        </td>
        <td>
          <div class="price-input-group">
            <span class="currency-symbol">€</span>
            <input type="number" step="1" class="price-input input-eur" data-id="${product.id}" value="${eurVal}" placeholder="—">
          </div>
        </td>
        <td>
          <div class="price-input-group">
            <span class="currency-symbol">zł</span>
            <input type="number" step="1" class="price-input input-pln" data-id="${product.id}" value="${plnVal}" placeholder="—">
          </div>
        </td>
      `;

      tableBody.appendChild(tr);
    });

    attachInputEvents();
  }

  // Handle live typing and auto-calculate EUR / PLN rates
  function attachInputEvents() {
    const gelInputs = document.querySelectorAll(".input-gel");
    const eurInputs = document.querySelectorAll(".input-eur");
    const plnInputs = document.querySelectorAll(".input-pln");

    const rateGEL = parseFloat(rateGelInput.value) || 2.95;
    const ratePLN = parseFloat(ratePlnInput.value) || 4.30;

    gelInputs.forEach(input => {
      input.addEventListener("input", (e) => {
        const id = e.target.dataset.id;
        const val = e.target.value;
        if (!workingPrices[id]) workingPrices[id] = {};
        workingPrices[id].gel = val !== "" ? parseFloat(val) : null;

        // Auto-calculate EUR and PLN if they are empty
        if (val !== "") {
          const numGel = parseFloat(val);
          const eurInp = document.querySelector(`.input-eur[data-id="${id}"]`);
          const plnInp = document.querySelector(`.input-pln[data-id="${id}"]`);

          if (eurInp && !eurInp.value) {
            const calcEur = Math.round(numGel / rateGEL);
            eurInp.value = calcEur;
            workingPrices[id].eur = calcEur;
          }
          if (plnInp && !plnInp.value) {
            const calcPln = Math.round(numGel * (ratePLN / rateGEL));
            plnInp.value = calcPln;
            workingPrices[id].pln = calcPln;
          }
        }
        updateStats();
      });
    });

    eurInputs.forEach(input => {
      input.addEventListener("input", (e) => {
        const id = e.target.dataset.id;
        const val = e.target.value;
        if (!workingPrices[id]) workingPrices[id] = {};
        workingPrices[id].eur = val !== "" ? parseFloat(val) : null;
        updateStats();
      });
    });

    plnInputs.forEach(input => {
      input.addEventListener("input", (e) => {
        const id = e.target.dataset.id;
        const val = e.target.value;
        if (!workingPrices[id]) workingPrices[id] = {};
        workingPrices[id].pln = val !== "" ? parseFloat(val) : null;
        updateStats();
      });
    });
  }

  // Update dashboard summary stats
  function updateStats() {
    const total = PRODUCTS.length;
    let priced = 0;

    PRODUCTS.forEach(p => {
      const pData = workingPrices[p.id];
      if (pData && (pData.gel || pData.eur || pData.pln)) {
        priced++;
      }
    });

    statTotal.textContent = total;
    statPriced.textContent = priced;
    statUnpriced.textContent = total - priced;
  }

  function getCategoryName(cat) {
    const names = {
      garden: "ბაღი & ტერასა",
      freestanding: "თავისუფლად მდგომი",
      interior: "ინტერიერი & კედლის",
      portal: "პორტალური",
      "built-in": "ჩაშენებული",
      accessories: "აქსესუარები",
      biofuel: "საწვავი"
    };
    return names[cat] || cat;
  }

  // Event Listeners for Filters & Search
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderTable();
  });

  categoryChips.addEventListener("click", (e) => {
    if (e.target.classList.contains("cat-chip")) {
      document.querySelectorAll(".cat-chip").forEach(c => c.classList.remove("active"));
      e.target.classList.add("active");
      currentCategory = e.target.dataset.cat;
      renderTable();
    }
  });

  // Save to Cloud Button
  btnSaveCloud.addEventListener("click", async () => {
    btnSaveCloud.disabled = true;
    btnSaveCloud.innerHTML = `
      <svg class="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
      ინახება ღრუბელში...`;

    const res = await CloudStorageManager.savePricesToCloud(workingPrices);
    
    btnSaveCloud.disabled = false;
    btnSaveCloud.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
      ღრუბელში შენახვა`;

    showToast(res.message);
    const now = new Date().toLocaleTimeString('ka-GE', { hour: '2-digit', minute: '2-digit' });
    statLastSync.textContent = `ბოლო განახლება: ${now}`;
  });

  // Export JSON
  btnExportJson.addEventListener("click", () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(workingPrices, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `gmt_prices_backup_${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast("JSON ფაილი წარმატებით ჩამოიქაჩა!");
  });

  // Import JSON
  btnImportJson.addEventListener("click", () => fileImportJson.click());
  fileImportJson.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target.result);
        if (imported && typeof imported === "object") {
          workingPrices = { ...workingPrices, ...imported };
          renderTable();
          updateStats();
          showToast("JSON მონაცემები წარმატებით აიტვირთა!");
        }
      } catch (err) {
        showToast("შეცდომა! არასწორი JSON ფაილი.");
      }
    };
    reader.readAsText(file);
  });

  function showToast(msg) {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span>🔥</span> ${msg}`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
  }

  // Initial render
  renderTable();
  updateStats();
});
