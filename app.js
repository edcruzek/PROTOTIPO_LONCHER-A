const state = {
  currentView: "ordenes-control",
  orderMode: "tarjetas",
  controlFilter: "todos",
  historyFilter: "todos",
  historySort: "recientes",
  dishFilter: "todos",
  search: "",
  selectedOrderId: "#1056",
  activeModal: null,
  editingDishId: null,
  openDishMenuId: null
};

const statusFlow = ["pendiente", "cocina", "empaque", "listo"];
const statusLabels = {
  pendiente: "Pendiente",
  cocina: "En cocina",
  empaque: "Empaquetando",
  listo: "Listo en mostrador",
  finalizado: "Finalizado",
  cancelado: "Cancelado"
};

const statusToHistory = {
  finalizado: "Entregado",
  cancelado: "Cancelado"
};

let activeOrders = [
  {
    id: "#1056",
    customer: "Ana Martínez",
    status: "pendiente",
    time: "1:20 PM",
    createdAt: Date.now() - 5 * 60000,
    phone: "55 1234 5678",
    type: "Consumo local",
    payment: "Efectivo",
    notes: "Sin crema. Llamar cuando esté listo.",
    products: [
      { name: "Tacos Dorados", quantity: 2, unit: 55, note: "Sin crema" },
      { name: "Agua de Horchata", quantity: 1, unit: 35, note: "Fría" },
      { name: "Sopa de Pasta", quantity: 1, unit: 45, note: "Sin zanahoria" },
      { name: "Consomé", quantity: 1, unit: 25, note: "Con limones extra" }
    ],
    priority: true,
    prepMinutes: 20
  },
  {
    id: "#1055",
    customer: "Luis Fernando",
    status: "cocina",
    time: "1:18 PM",
    createdAt: Date.now() - 7 * 60000,
    phone: "55 9876 5432",
    type: "Para llevar",
    payment: "Tarjeta",
    notes: "Agregar cubiertos.",
    products: [
      { name: "Pechuga Asada", quantity: 1, unit: 95, note: "" },
      { name: "Sopa de Pasta", quantity: 1, unit: 45, note: "" },
      { name: "Ensalada", quantity: 1, unit: 35, note: "Sin aderezo" },
      { name: "Agua de Jamaica", quantity: 1, unit: 25, note: "Sin hielo" }
    ],
    priority: false,
    prepMinutes: 18
  },
  {
    id: "#1054",
    customer: "María González",
    status: "empaque",
    time: "1:10 PM",
    createdAt: Date.now() - 15 * 60000,
    phone: "55 3333 4444",
    type: "Consumo local",
    payment: "Efectivo",
    notes: "Mesa 3.",
    products: [
      { name: "Quesadillas", quantity: 3, unit: 45, note: "Flor de calabaza" },
      { name: "Consomé", quantity: 1, unit: 25, note: "" }
    ],
    priority: false,
    prepMinutes: 15
  },
  {
    id: "#1053",
    customer: "Carlos Ruiz",
    status: "listo",
    time: "1:05 PM",
    createdAt: Date.now() - 20 * 60000,
    phone: "55 5566 7788",
    type: "Para llevar",
    payment: "Transferencia",
    notes: "Avisar en mostrador.",
    products: [
      { name: "Milanesa de Res", quantity: 1, unit: 105, note: "" },
      { name: "Agua de Limón", quantity: 1, unit: 25, note: "Sin azúcar" }
    ],
    priority: true,
    prepMinutes: 16
  }
];

let historyOrders = [
  historyOrder("#1052", "Sofía Herrera", "Hoy 12:45 PM", "Cancelado", "Consumo local", 245, "-", "Cliente canceló antes de preparar."),
  historyOrder("#1051", "Jorge Ramírez", "Hoy 12:30 PM", "Completado", "Para llevar", 178, "15 min", "Pedido repetible."),
  historyOrder("#1050", "Valeria Torres", "Hoy 12:10 PM", "Entregado", "Consumo local", 365, "27 min", "Mesa 2."),
  historyOrder("#1049", "Diego López", "Hoy 11:50 AM", "Cancelado", "Consumo local", 132, "-", "Producto agotado."),
  historyOrder("#1048", "Miguel Ángel", "Hoy 11:42 AM", "Entregado", "Para llevar", 210, "22 min", ""),
  historyOrder("#1047", "Fernanda Soto", "Hoy 11:30 AM", "Completado", "Consumo local", 155, "18 min", ""),
  historyOrder("#1046", "Ricardo Vega", "Hoy 11:20 AM", "Entregado", "Consumo local", 288, "30 min", ""),
  historyOrder("#1045", "Laura Gómez", "Hoy 11:05 AM", "Completado", "Para llevar", 190, "17 min", "")
];

let dishes = [
  { id: "dish-1", name: "Chilaquiles Rojos", category: "desayunos", price: 85, detail: "Totopos bañados en salsa roja con crema y queso.", status: "Activo", image: "assets/chilaquiles.png" },
  { id: "dish-2", name: "Caldo de Pollo", category: "comidas", price: 110, detail: "Consomé tradicional con verduras de temporada.", status: "Pocas piezas", image: "assets/caldo-pollo.png" },
  { id: "dish-3", name: "Tacos Dorados", category: "comidas", price: 95, detail: "Orden de 4 tacos rellenos de pollo o papa.", status: "Agotado", image: "assets/tacos-dorados.png" },
  { id: "dish-4", name: "Enchiladas Suizas", category: "comidas", price: 120, detail: "Tortillas rellenas de pollo bañadas en salsa.", status: "Activo", image: "" },
  { id: "dish-5", name: "Agua de Horchata", category: "bebidas", price: 35, detail: "Agua fresca de 1 litro.", status: "Activo", image: "" }
];

const content = document.querySelector("#content");
const searchInput = document.querySelector("#searchInput");
const navButtons = document.querySelectorAll("[data-view]");

function historyOrder(id, customer, date, status, type, total, totalTime, notes) {
  return {
    id,
    customer,
    date,
    status,
    type,
    total,
    totalTime,
    notes,
    products: [
      { name: "Menú del Día", quantity: 1, unit: Math.max(85, Math.round(total * 0.55)), note: "" },
      { name: "Agua fresca", quantity: 1, unit: 25, note: "" }
    ]
  };
}

function money(value) {
  return `$${Number(value).toFixed(2)}`;
}

function orderTotal(order) {
  return order.products.reduce((sum, item) => sum + item.quantity * item.unit, 0);
}

function minutesAgo(order) {
  const minutes = Math.max(1, Math.round((Date.now() - order.createdAt) / 60000));
  return `${order.time} (hace ${minutes} min)`;
}

function nextFolio() {
  const ids = [...activeOrders, ...historyOrders].map((order) => Number(order.id.replace("#", "")));
  return `#${Math.max(...ids) + 1}`;
}

function setContent(html) {
  content.innerHTML = html + renderModal();
}

function metricCard(icon, title, value, detail) {
  return `<article><span>${icon}</span><div><small>${title}</small><strong>${value}</strong><p>${detail}</p></div></article>`;
}

function statusBadge(status) {
  const key = typeof status === "string" ? status.toLowerCase().replaceAll(" ", "-") : status;
  return `<span class="ops-badge ${key}">${statusLabels[status] || status}</span>`;
}

function renderOrderControl() {
  const title = state.orderMode === "tablero" ? "Tablero de estado" : "Control de pedidos";
  const subtitle = state.orderMode === "tablero"
    ? "Prioriza y monitorea el avance de cada pedido."
    : "Supervisa pedidos, cambia estados y prioriza la operación en tiempo real.";

  setContent(`
    <div class="page-head">
      <div>
        <h1>${title}</h1>
        <p>${subtitle}</p>
      </div>
      <div class="header-actions">
        <button class="hero-action" type="button" data-open-modal="order"><span>+</span> Agregar pedido</button>
        <div class="mode-switch">
          <button class="${state.orderMode === "tarjetas" ? "selected" : ""}" type="button" data-order-mode="tarjetas">Tarjetas</button>
          <button class="${state.orderMode === "tablero" ? "selected" : ""}" type="button" data-order-mode="tablero">Tablero</button>
        </div>
      </div>
    </div>
    ${state.orderMode === "tablero" ? renderBoard() : renderOrderCards()}
  `);
}

function renderOrderCards() {
  const filtered = filterActiveOrders();
  const counts = {
    nuevos: activeOrders.filter((o) => o.status === "pendiente").length,
    cocina: activeOrders.filter((o) => o.status === "cocina").length,
    listos: activeOrders.filter((o) => o.status === "listo").length,
    promedio: averagePrep()
  };

  return `
    <div class="ops-metric-row">
      ${metricCard("N", "Pedidos nuevos", counts.nuevos, "Última hora")}
      ${metricCard("C", "En preparación", counts.cocina, "En cocina")}
      ${metricCard("L", "Listos en mostrador", counts.listos, "Para recoger")}
      ${metricCard("T", "Tiempo promedio", `${counts.promedio} min`, "Preparación")}
    </div>
    <div class="ops-filter-row">
      ${filterButton("todos", "Todos")}
      ${filterButton("urgentes", `Urgentes ${activeOrders.filter((o) => o.priority).length}`)}
      ${filterButton("pendiente", "Pendientes")}
      ${filterButton("cocina", "En cocina")}
      ${filterButton("empaque", "Empaquetando")}
      ${filterButton("listo", "Listos")}
      <div class="sort-note">Más recientes primero</div>
    </div>
    <div class="ops-card-grid">
      ${filtered.length ? filtered.map(orderCard).join("") : emptyState("No hay pedidos con este filtro.", "Cambia el filtro o agrega un pedido nuevo.")}
    </div>
    <div class="ops-pagination"><span>Mostrando ${filtered.length} de ${activeOrders.length} pedidos activos</span></div>
  `;
}

function filterButton(key, label) {
  return `<button class="${state.controlFilter === key ? "selected" : ""}" type="button" data-control-filter="${key}">${label}</button>`;
}

function filterActiveOrders() {
  const query = state.search.trim().toLowerCase();
  return activeOrders.filter((order) => {
    const matchesSearch = !query || `${order.id} ${order.customer} ${order.type} ${order.products.map((p) => p.name).join(" ")}`.toLowerCase().includes(query);
    const matchesFilter =
      state.controlFilter === "todos" ||
      (state.controlFilter === "urgentes" && order.priority) ||
      order.status === state.controlFilter;
    return matchesSearch && matchesFilter;
  });
}

function orderCard(order) {
  const primaryAction = order.status === "listo" ? "Finalizar" : "Cambiar estado";
  return `
    <article class="ops-order-card ${order.status}">
      <div class="ops-card-head">
        <h2>${order.id}</h2>
        <div class="status-wrap">
          ${statusBadge(order.status)}
          ${order.priority ? "<span class=\"urgent-dot\">!</span>" : ""}
        </div>
      </div>
      <strong>${order.customer}</strong>
      <div class="ops-meta">
        <span>${minutesAgo(order)}</span>
        <span>${order.type}</span>
        <span>${order.phone}</span>
      </div>
      <div class="ops-summary">
        <small>Resumen (${order.products.length} productos)</small>
        <p>${order.products.map((item) => `${item.quantity}x ${item.name}`).join(", ")}</p>
      </div>
      <div class="ops-actions">
        <button type="button" data-detail-order="${order.id}">Ver detalle</button>
        <button class="primary" type="button" data-next-status="${order.id}">${primaryAction}</button>
      </div>
      <div class="ops-footer ${order.status}">${footerText(order)}</div>
    </article>
  `;
}

function footerText(order) {
  if (order.status === "pendiente") return `Preparación estimada: ${order.prepMinutes} min`;
  if (order.status === "cocina") return `En cocina: ${Math.max(1, Math.round((Date.now() - order.createdAt) / 60000))} min`;
  if (order.status === "empaque") return "Empaquetando pedido";
  return "Listo en mostrador";
}

function renderBoard() {
  const columns = statusFlow.map((status) => ({
    status,
    title: statusLabels[status],
    orders: activeOrders.filter((order) => order.status === status)
  }));

  return `
    <div class="board-tools">
      <button class="selected" type="button">Todos los estados</button>
      <button type="button">Todos los pagos</button>
      <button type="button">Hoy</button>
    </div>
    <div class="board-layout">
      ${columns.map((column) => `
        <section class="board-column ${column.status}">
          <header><h2>${column.title}</h2><span>${column.orders.length}</span></header>
          <div>${column.orders.length ? column.orders.map(boardCard).join("") : `<p class="board-empty">Sin pedidos</p>`}</div>
        </section>
      `).join("")}
      <aside class="board-summary">
        <h2>Resumen operativo</h2>
        <div><span>A</span><strong>${activeOrders.length}</strong><p>Pedidos abiertos</p></div>
        <div><span>U</span><strong>${activeOrders.filter((o) => o.priority).length}</strong><p>Pedidos urgentes</p></div>
        <div><span>C</span><strong>${activeOrders.filter((o) => o.status === "cocina").length}</strong><p>En cocina</p></div>
        <div><span>T</span><strong>${averagePrep()} min</strong><p>Tiempo promedio</p></div>
        <div><span>L</span><strong>${activeOrders.filter((o) => o.status === "listo").length}</strong><p>Listos en mostrador</p></div>
        <button type="button" data-view-target="estadisticas">Ver métricas detalladas</button>
      </aside>
    </div>
    <p class="board-note">Usa “Cambiar estado” para mover pedidos entre columnas.</p>
  `;
}

function boardCard(order) {
  return `
    <article class="board-card ${order.status}">
      <div><h3>${order.id}</h3>${statusBadge(order.status)}</div>
      <strong>${order.customer}</strong>
      <p>${minutesAgo(order)}</p>
      <p>${order.products.length} productos</p>
      <small>${footerText(order)}</small>
      <button type="button" data-next-status="${order.id}">...</button>
    </article>
  `;
}

function renderOrderHistory() {
  const rows = filteredHistory();
  setContent(`
    <div class="page-head">
      <div>
        <h1>Historial de pedidos</h1>
        <p>Consulta pedidos completados, cancelados y finalizados en mostrador.</p>
      </div>
    </div>
    <div class="history-filters">
      <label>Estado <div>
        ${historyFilterButton("todos", "Todos")}
        ${historyFilterButton("Entregado", "Entregado")}
        ${historyFilterButton("Completado", "Completado")}
        ${historyFilterButton("Cancelado", "Cancelado")}
      </div></label>
      <label>Buscar por folio o cliente <input data-history-search value="${state.search}" placeholder="Ej. #1056 o Ana Martínez" /></label>
      <label>Ordenar por <div class="choice-row compact-choice">
        <button class="${state.historySort === "recientes" ? "selected" : ""}" type="button" data-history-sort-value="recientes">Más recientes</button>
        <button class="${state.historySort === "antiguos" ? "selected" : ""}" type="button" data-history-sort-value="antiguos">Más antiguos</button>
      </div></label>
    </div>
    <div class="history-metrics">
      ${metricCard("E", "Entregados hoy", historyOrders.filter((o) => o.status === "Entregado").length, "Finalizados en mostrador")}
      ${metricCard("C", "Cancelados", historyOrders.filter((o) => o.status === "Cancelado").length, "Pedidos no preparados")}
      ${metricCard("P", "Pedidos completados", historyOrders.filter((o) => o.status === "Completado").length, "Para llevar o consumo local")}
      ${metricCard("T", "Tiempo promedio", `${averagePrep()} min`, "Preparación total")}
    </div>
    <div class="history-table-wrap">
      <table class="history-table">
        <thead><tr><th>Folio</th><th>Cliente</th><th>Hora</th><th>Estado</th><th>Tipo</th><th>Total</th><th>Tiempo total</th><th>Acciones</th></tr></thead>
        <tbody>${rows.map(historyRow).join("")}</tbody>
      </table>
      <div class="ops-pagination"><span>Mostrando ${rows.length} de ${historyOrders.length} pedidos</span></div>
    </div>
  `);
}

function historyFilterButton(key, label) {
  return `<button class="${state.historyFilter === key ? "selected" : ""}" type="button" data-history-filter="${key}">${label}</button>`;
}

function filteredHistory() {
  const query = state.search.trim().toLowerCase();
  const rows = historyOrders.filter((order) => {
    const matchesStatus = state.historyFilter === "todos" || order.status === state.historyFilter;
    const matchesSearch = !query || `${order.id} ${order.customer} ${order.type}`.toLowerCase().includes(query);
    return matchesStatus && matchesSearch;
  });
  return state.historySort === "antiguos" ? [...rows].reverse() : rows;
}

function historyRow(order) {
  return `
    <tr>
      <td><strong>${order.id}</strong></td>
      <td>${order.customer}</td>
      <td>${order.date}</td>
      <td><span class="table-status ${order.status.toLowerCase()}">${order.status}</span></td>
      <td>${order.type}</td>
      <td>${money(order.total)}</td>
      <td>${order.totalTime}</td>
      <td><button type="button" data-history-detail="${order.id}">Ver detalle</button><button type="button" data-repeat-order="${order.id}">Repetir pedido</button></td>
    </tr>
  `;
}

function renderOrderDetail() {
  const order = findOrder(state.selectedOrderId) || activeOrders[0] || historyOrders[0];
  const isActive = activeOrders.some((item) => item.id === order.id);
  setContent(`
    <div class="page-head">
      <div>
        <h1>Detalle del pedido ${order.id}</h1>
        <p>Revisa productos, datos del cliente y actualiza el flujo operativo.</p>
      </div>
    </div>
    <div class="detail-layout">
      <section class="detail-main">
        <article class="customer-card">
          <span class="flame">${order.priority ? "!" : "P"}</span>
          <div><h2>${order.customer}</h2><p>${order.phone || "Sin teléfono"}</p><p>${order.type}</p></div>
          <div class="customer-facts"><p>Pedido recibido <strong>${order.time || order.date}</strong></p><p>Método de pago <strong>${order.payment || "Efectivo"}</strong></p><p>Referencia del pedido <strong>${order.notes || "Sin notas"}</strong></p></div>
          <div class="status-wrap">${isActive ? statusBadge(order.status) : `<span class="table-status ${order.status.toLowerCase()}">${order.status}</span>`}</div>
        </article>
        <article class="products-card">
          <h2>Productos del pedido</h2>
          <table>
            <thead><tr><th>Producto</th><th>Notas</th><th>Cant.</th><th>Precio unit.</th><th>Total</th></tr></thead>
            <tbody>${order.products.map(productRow).join("")}</tbody>
          </table>
          <div class="detail-note">Nota del cliente: ${order.notes || "Sin notas adicionales."}</div>
          <div class="detail-total"><p>Subtotal <strong>${money(orderTotal(order))}</strong></p><p>Total <strong>${money(orderTotal(order))}</strong></p></div>
        </article>
        <article class="timeline-card">${timeline(order)}</article>
      </section>
      <aside class="detail-side">
        <article><h2>Acciones rápidas</h2>${isActive ? `<button class="primary" data-next-status="${order.id}">Cambiar estado</button><button data-print-ticket="${order.id}">Vista previa del ticket</button><button data-cancel-order="${order.id}">Cancelar pedido</button>` : `<button data-repeat-order="${order.id}">Repetir pedido</button><button data-print-ticket="${order.id}">Vista previa del ticket</button>`}</article>
        <article><h2>Tiempo estimado</h2><p>Selecciona o ajusta el tiempo estimado de preparación.</p><div class="time-buttons">${[15, 20, 25].map((min) => `<button class="${order.prepMinutes === min ? "selected" : ""}" data-prep-time="${min}">${min} min</button>`).join("")}</div><label><input value="${order.prepMinutes || 20}" data-prep-input /> min</label></article>
        <article><h2>Resumen operativo</h2><p>Estado <strong>${isActive ? statusLabels[order.status] : order.status}</strong></p><p>Tipo <strong>${order.type}</strong></p><p>Prioridad <strong>${order.priority ? "Alta" : "Normal"}</strong></p><p>Preparación estimada <strong>${order.prepMinutes || 20} min</strong></p></article>
      </aside>
    </div>
  `);
}

function productRow(product) {
  return `<tr><td>${product.name}</td><td>${product.note || "-"}</td><td>${product.quantity}</td><td>${money(product.unit)}</td><td>${money(product.quantity * product.unit)}</td></tr>`;
}

function timeline(order) {
  const steps = [
    ["pendiente", "Recibido"],
    ["cocina", "En cocina"],
    ["empaque", "Empaquetando"],
    ["listo", "Listo"],
    ["finalizado", "Finalizado"]
  ];
  const currentIndex = order.status === "finalizado" ? 4 : Math.max(0, statusFlow.indexOf(order.status));
  return steps.map(([key, label], index) => `<div class="${index <= currentIndex ? "done" : ""}"><span>${index + 1}</span><strong>${label}</strong><small>${index === 0 ? order.time || "-" : "-"}</small></div>`).join("");
}

function findOrder(id) {
  return activeOrders.find((order) => order.id === id) || historyOrders.find((order) => order.id === id);
}

function renderDishes() {
  const filtered = filteredDishes();
  setContent(`
    <div class="page-head">
      <div>
        <h1>Gestión de platillos</h1>
        <p>Administra disponibilidad, precios y categorías del menú.</p>
      </div>
      <button class="hero-action" type="button" data-open-modal="dish"><span>+</span> Agregar platillo</button>
    </div>
    <div class="dish-toolbar">
      <label class="inline-search">
        <span class="search-icon"></span>
        <input data-dish-search type="search" value="${state.search}" placeholder="Buscar platillo por nombre..." />
      </label>
      <div class="pill-row compact">
        ${dishFilterButton("todos", "Todos")}
        ${dishFilterButton("desayunos", "Desayunos")}
        ${dishFilterButton("comidas", "Comidas")}
        ${dishFilterButton("bebidas", "Bebidas")}
      </div>
    </div>
    <div class="dish-grid">
      ${filtered.length ? filtered.map(dishCard).join("") : emptyState("No hay platillos en esta categoría.", "Agrega un platillo o cambia el filtro.")}
    </div>
  `);
}

function dishFilterButton(key, label) {
  return `<button class="${state.dishFilter === key ? "selected" : ""}" type="button" data-dish-filter="${key}">${label}</button>`;
}

function filteredDishes() {
  const query = state.search.trim().toLowerCase();
  return dishes.filter((dish) => {
    const matchesCategory = query || state.dishFilter === "todos" || dish.category === state.dishFilter;
    const matchesSearch = !query || `${dish.name} ${dish.detail}`.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });
}

function normalizeCategory(value) {
  const text = String(value || "").trim().toLowerCase();
  if (text.includes("desayuno")) return "desayunos";
  if (text.includes("bebida")) return "bebidas";
  return "comidas";
}

function categoryLabel(value) {
  const category = normalizeCategory(value);
  if (category === "desayunos") return "Desayunos";
  if (category === "bebidas") return "Bebidas";
  return "Comidas";
}

function dishCard(dish) {
  const tone = dish.status === "Activo" ? "active" : dish.status === "Agotado" ? "soldout" : "low";
  return `
    <article class="dish-card ${tone}">
      <div class="dish-image ${dish.image ? "" : "missing"}" ${dish.image ? `style="background-image: url('${dish.image}')"` : ""}>
        ${dish.image ? "" : "<span class=\"missing-icon\"></span>"}
      </div>
      <div class="dish-body">
        <h2>${dish.name}</h2>
        <p>${dish.detail}</p>
        <div class="dish-bottom">
          <strong>${money(dish.price)}</strong>
          <div class="dish-menu-wrap">
            <button class="dish-menu-trigger" type="button" data-dish-menu="${dish.id}" aria-label="Opciones de ${dish.name}">...</button>
            ${state.openDishMenuId === dish.id ? `
              <div class="dish-menu">
                <button type="button" data-edit-dish="${dish.id}">Editar platillo</button>
                <button type="button" data-delete-dish="${dish.id}">Eliminar platillo</button>
              </div>
            ` : ""}
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderStats() {
  const completedToday = historyOrders.filter((order) => order.status === "Entregado" || order.status === "Completado").length;
  const canceled = historyOrders.filter((order) => order.status === "Cancelado").length;
  const inKitchen = activeOrders.filter((order) => order.status === "cocina").length;
  const ready = activeOrders.filter((order) => order.status === "listo").length;
  const topDish = mostOrderedDish();
  setContent(`
    <div class="page-head">
      <div>
        <h1>Estadísticas operativas</h1>
        <p>Métricas útiles para monitorear la operación diaria de La Pavonería.</p>
      </div>
    </div>
    <div class="history-metrics">
      ${metricCard("P", "Pedidos del día", completedToday + activeOrders.length, "Activos y finalizados")}
      ${metricCard("C", "En cocina", inKitchen, "Preparándose ahora")}
      ${metricCard("L", "Listos", ready, "Esperando en mostrador")}
      ${metricCard("T", "Tiempo promedio de preparación", `${averagePrep()} min`, "Pedidos activos")}
    </div>
    <div class="analytics-grid ops-stats-grid">
      <article class="revenue-card">
        <div class="revenue-head"><span>Actividad por hora</span><i>A</i></div>
        <div class="revenue-value">${activeOrders.length + completedToday} pedidos</div>
        <div class="revenue-bars">
          <span style="height: 38%"></span><span style="height: 55%"></span><span style="height: 44%"></span>
          <span style="height: 76%"></span><span class="today" style="height: 88%"></span><span style="height: 64%"></span>
        </div>
      </article>
      <article class="peak-card">
        <h2>Platillo más pedido</h2>
        <strong>${topDish.name}</strong>
        <p>${topDish.count} unidades registradas</p>
      </article>
      <article class="peak-card">
        <h2>Pedidos cancelados</h2>
        <strong>${canceled}</strong>
        <p>Revisar causas antes del cierre</p>
      </article>
    </div>
  `);
}

function mostOrderedDish() {
  const counts = {};
  [...activeOrders, ...historyOrders].forEach((order) => {
    order.products.forEach((product) => {
      counts[product.name] = (counts[product.name] || 0) + product.quantity;
    });
  });
  const [name, count] = Object.entries(counts).sort((a, b) => b[1] - a[1])[0] || ["Sin datos", 0];
  return { name, count };
}

function averagePrep() {
  const values = activeOrders.map((order) => order.prepMinutes || 20);
  if (!values.length) return 0;
  return Math.round(values.reduce((sum, item) => sum + item, 0) / values.length);
}

function renderSettings() {
  setContent(`
    <div class="page-head"><div><h1>Ajustes</h1><p>Configuración general del prototipo.</p></div></div>
    <div class="settings-panel">
      <label><span>Nombre del negocio</span><input value="La Pavonería" /></label>
      <label><span>Horario activo</span><input value="12:00 PM - 10:00 PM" /></label>
      <label><span>Teléfono</span><input value="55 0000 0000" /></label>
      <button type="button" class="save-button">Guardar cambios</button>
    </div>
  `);
}

function renderLogout() {
  setContent(`
    <div class="page-head"><div><h1>Salir</h1><p>Flujo visual para cerrar sesión.</p></div></div>
    <div class="empty-state">
      <h2>Sesión activa</h2>
      <p>Este prototipo no cierra una cuenta real.</p>
      <button type="button" class="save-button" data-view-target="ordenes-control">Volver a órdenes</button>
    </div>
  `);
}

function emptyState(title, text) {
  return `<div class="empty-state compact"><h2>${title}</h2><p>${text}</p></div>`;
}

function renderModal() {
  if (state.activeModal === "order") return orderModal();
  if (state.activeModal === "dish") return dishModal();
  if (state.activeModal === "ticket") return ticketModal();
  if (state.activeModal === "notifications") return notificationsModal();
  return "";
}

function customSelect(name, options, selected) {
  return `
    <div class="custom-select" data-custom-select>
      <input type="hidden" name="${name}" value="${selected}" />
      <button class="custom-select-trigger" type="button" data-select-toggle onclick="event.stopPropagation(); this.closest('[data-custom-select]').classList.toggle('open');">
        <span>${selected}</span>
        <b>⌄</b>
      </button>
      <div class="custom-select-menu">
        ${options.map((option) => `
          <button class="${option === selected ? "selected" : ""}" type="button" data-select-option="${option}" onclick="event.stopPropagation(); const s=this.closest('[data-custom-select]'); s.querySelector('input').value=this.dataset.selectOption; s.querySelector('.custom-select-trigger span').textContent=this.dataset.selectOption; s.querySelectorAll('[data-select-option]').forEach(o => o.classList.toggle('selected', o === this)); s.classList.remove('open');">${option}</button>
        `).join("")}
      </div>
    </div>
  `;
}

function customSelectFromItems(name, options, selected) {
  const selectedItem = options.find((option) => option.value === selected) || options[0];
  return `
    <div class="custom-select" data-custom-select>
      <input type="hidden" name="${name}" value="${selectedItem.value}" />
      <button class="custom-select-trigger" type="button" data-select-toggle onclick="event.stopPropagation(); this.closest('[data-custom-select]').classList.toggle('open');">
        <span>${selectedItem.label}</span>
        <b>⌄</b>
      </button>
      <div class="custom-select-menu">
        ${options.map((option) => `
          <button class="${option.value === selectedItem.value ? "selected" : ""}" type="button" data-select-option="${option.value}" data-select-label="${option.label}" onclick="event.stopPropagation(); const s=this.closest('[data-custom-select]'); s.querySelector('input').value=this.dataset.selectOption; s.querySelector('.custom-select-trigger span').textContent=this.dataset.selectLabel; s.querySelectorAll('[data-select-option]').forEach(o => o.classList.toggle('selected', o === this)); s.classList.remove('open');">${option.label}</button>
        `).join("")}
      </div>
    </div>
  `;
}

function orderProductRows(count = 1, existing = []) {
  const dishOptions = dishes.map((dish) => dish.name);
  const safeCount = clampDishCount(count);
  return Array.from({ length: safeCount }, (_, index) => {
    const product = existing[index] || {};
    const selectedDish = product.name && dishOptions.includes(product.name) ? product.name : dishes[0]?.name || "Platillo";
    return `
      <div class="order-product-row">
        <div class="form-field"><span>Platillo</span>${customSelect("products[]", dishOptions, selectedDish)}</div>
        <label>Cantidad<input name="quantities[]" type="number" min="1" value="${product.quantity || 1}" /></label>
        <label class="product-note">Nota<input name="productNotes[]" value="${product.note || ""}" placeholder="Sin cebolla, extra salsa..." /></label>
      </div>
    `;
  }).join("");
}

function clampDishCount(value) {
  return Math.min(12, Math.max(1, Number(value) || 1));
}

function renderOrderProductFields(form, count) {
  const container = form.querySelector("[data-order-products]");
  if (!container) return;
  const safeCount = clampDishCount(count);
  const countInput = form.querySelector("[data-order-product-count]");
  if (countInput) countInput.value = safeCount;
  const data = new FormData(form);
  const names = data.getAll("products[]");
  const quantities = data.getAll("quantities[]");
  const notes = data.getAll("productNotes[]");
  const existing = names.map((name, index) => ({
    name,
    quantity: Math.max(1, Number(quantities[index]) || 1),
    note: notes[index] || ""
  }));
  container.innerHTML = orderProductRows(safeCount, existing);
}

function scheduleOrderProductFields(input) {
  const form = input.closest("form");
  setTimeout(() => renderOrderProductFields(form, input.value), 0);
}

function orderModal() {
  return `
    <div class="modal-backdrop">
      <form class="modal-card" data-form="order">
        <header><h2>Agregar pedido</h2><button type="button" data-close-modal>×</button></header>
        <div class="form-grid">
          <label>Cliente<input name="customer" required placeholder="Nombre del cliente" /></label>
          <label>Teléfono<input name="phone" placeholder="55 0000 0000" /></label>
          <div class="form-field"><span>Tipo</span>${customSelect("type", ["Para llevar", "Consumo local"], "Para llevar")}</div>
          <div class="form-field"><span>Pago</span>${customSelect("payment", ["Efectivo", "Tarjeta", "Transferencia"], "Efectivo")}</div>
          <div class="form-field wide dish-count-field">
            <span>Número de platillos a agregar</span>
            <div class="dish-count-control">
              <button type="button" data-count-step="-1" onclick="event.stopPropagation(); const i=this.parentElement.querySelector('[data-order-product-count]'); i.value=Math.min(12, Math.max(1, (Number(i.value) || 1) - 1)); i.dispatchEvent(new Event('change', { bubbles: true }));">−</button>
              <input name="dishCount" data-order-product-count type="number" min="1" max="12" value="1" />
              <button type="button" data-count-step="1" onclick="event.stopPropagation(); const i=this.parentElement.querySelector('[data-order-product-count]'); i.value=Math.min(12, Math.max(1, (Number(i.value) || 1) + 1)); i.dispatchEvent(new Event('change', { bubbles: true }));">+</button>
            </div>
          </div>
          <section class="order-products-section wide">
            <h3>Platillos del pedido</h3>
            <div data-order-products>${orderProductRows(1)}</div>
          </section>
          <label class="wide">Notas<textarea name="notes" placeholder="Notas del pedido"></textarea></label>
        </div>
        <footer><button type="button" data-close-modal>Cancelar</button><button class="primary" type="button" data-submit-order>Crear pedido</button></footer>
      </form>
    </div>
  `;
}

function dishModal() {
  const dish = dishes.find((item) => item.id === state.editingDishId) || { name: "", category: "comidas", price: 85, detail: "", status: "Activo" };
  const categoryOptions = [
    { value: "desayunos", label: "Desayunos" },
    { value: "comidas", label: "Comidas" },
    { value: "bebidas", label: "Bebidas" }
  ];
  return `
    <div class="modal-backdrop">
      <form class="modal-card" data-form="dish">
        <header><h2>${state.editingDishId ? "Editar platillo" : "Agregar platillo"}</h2><button type="button" data-close-modal>×</button></header>
        <div class="form-grid">
          <label>Nombre<input name="name" required value="${dish.name}" /></label>
          <div class="form-field"><span>Categoría</span>${customSelectFromItems("category", categoryOptions, dish.category)}</div>
          <label>Precio<input name="price" inputmode="decimal" value="${dish.price}" /></label>
          <label>Imagen del platillo<input name="image" type="file" accept="image/*" /></label>
          <label class="wide">Descripción<textarea name="detail">${dish.detail}</textarea></label>
        </div>
        <footer><button type="button" data-close-modal>Cancelar</button><button class="primary" type="button" data-submit-dish>Guardar platillo</button></footer>
      </form>
    </div>
  `;
}

function ticketModal() {
  const order = findOrder(state.selectedOrderId);
  return `
    <div class="modal-backdrop">
      <div class="modal-card ticket-preview">
        <header><h2>Vista previa del ticket</h2><button type="button" data-close-modal>×</button></header>
        <p><strong>${order?.id || ""}</strong> - ${order?.customer || ""}</p>
        <p>Total: <strong>${money(order ? orderTotal(order) : 0)}</strong></p>
        <footer><button class="primary" type="button" data-close-modal>Aceptar</button></footer>
      </div>
    </div>
  `;
}

function notificationsModal() {
  const pending = activeOrders.filter((order) => order.status === "pendiente").length;
  const ready = activeOrders.filter((order) => order.status === "listo").length;
  const canceled = historyOrders.filter((order) => order.status === "Cancelado").length;
  return `
    <div class="modal-backdrop">
      <div class="modal-card notifications-card">
        <header><h2>Notificaciones</h2><button type="button" data-close-modal>×</button></header>
        <div class="notification-list">
          <article><strong>${pending} pedidos nuevos</strong><p>Revisa los pedidos pendientes antes de pasarlos a cocina.</p></article>
          <article><strong>${ready} pedidos listos en mostrador</strong><p>Avisa al cliente o entrégalo en caja.</p></article>
          <article><strong>${canceled} pedidos cancelados</strong><p>Consulta el historial para revisar los motivos registrados.</p></article>
        </div>
        <footer><button class="primary" type="button" data-close-modal>Aceptar</button></footer>
      </div>
    </div>
  `;
}

function render() {
  const renderers = {
    "ordenes-control": renderOrderControl,
    "ordenes-historial": renderOrderHistory,
    "detalle-pedido": renderOrderDetail,
    platillos: renderDishes,
    estadisticas: renderStats,
    ajustes: renderSettings,
    salir: renderLogout
  };
  renderers[state.currentView]();
  updateNav();
  updateSearchPlaceholder();
  document.querySelector(".prototype-shell").dataset.view = state.currentView;
}

function updateSearchPlaceholder() {
  const labels = {
    "ordenes-control": "Buscar órdenes...",
    "ordenes-historial": "Buscar órdenes...",
    "detalle-pedido": "Buscar órdenes...",
    platillos: "Buscar platillo...",
    estadisticas: "Buscar métricas...",
    ajustes: "Buscar ajustes...",
    salir: "Buscar..."
  };
  searchInput.value = state.search;
  searchInput.placeholder = labels[state.currentView] || "Buscar...";
}

function updateNav() {
  navButtons.forEach((button) => {
    const isOrderArea = state.currentView === "detalle-pedido" || state.currentView.startsWith("ordenes-");
    const isOrderParent = button.classList.contains("nav-item") && button.dataset.view === "ordenes-control" && isOrderArea;
    const isDetailControl = button.classList.contains("subnav-item") && button.dataset.view === "ordenes-control" && state.currentView === "detalle-pedido";
    button.classList.toggle("active", button.dataset.view === state.currentView || isOrderParent || isDetailControl);
  });
}

function setView(view) {
  state.currentView = view;
  if (view !== "platillos" && view !== "ordenes-historial") state.search = "";
  render();
}

function advanceOrder(orderId) {
  const order = activeOrders.find((item) => item.id === orderId);
  if (!order) return;
  const index = statusFlow.indexOf(order.status);
  if (index < statusFlow.length - 1) {
    order.status = statusFlow[index + 1];
  } else {
    finalizeOrder(order, "Entregado");
  }
  render();
}

function finalizeOrder(order, status) {
  activeOrders = activeOrders.filter((item) => item.id !== order.id);
  historyOrders.unshift({
    ...order,
    status,
    date: new Date().toLocaleString("es-MX", { day: "2-digit", month: "2-digit", year: "numeric", hour: "numeric", minute: "2-digit" }),
    total: orderTotal(order),
    totalTime: `${order.prepMinutes || 20} min`
  });
}

function repeatOrder(orderId) {
  const source = historyOrders.find((order) => order.id === orderId);
  if (!source) return;
  activeOrders.unshift({
    id: nextFolio(),
    customer: source.customer,
    status: "pendiente",
    time: new Date().toLocaleTimeString("es-MX", { hour: "numeric", minute: "2-digit" }),
    createdAt: Date.now(),
    phone: source.phone || "",
    type: source.type,
    payment: "Efectivo",
    notes: `Pedido repetido desde ${source.id}`,
    products: source.products.map((item) => ({ ...item })),
    priority: false,
    prepMinutes: 20
  });
  state.currentView = "ordenes-control";
  render();
}

function productFromName(name, quantity, note = "") {
  const dish = dishes.find((item) => item.name.toLowerCase() === String(name).toLowerCase());
  return { name: dish?.name || name || "Platillo", quantity, unit: dish?.price || 85, note };
}

function handleOrderSubmit(form) {
  const data = new FormData(form);
  const productNames = data.getAll("products[]");
  const productQuantities = data.getAll("quantities[]");
  const productNotes = data.getAll("productNotes[]");
  const products = productNames
    .map((name, index) => productFromName(
      name,
      Math.max(1, Number(productQuantities[index]) || 1),
      productNotes[index] || ""
    ))
    .filter((product) => product.name);
  const customer = data.get("customer").trim() || "Cliente";
  activeOrders.unshift({
    id: nextFolio(),
    customer,
    status: "pendiente",
    time: new Date().toLocaleTimeString("es-MX", { hour: "numeric", minute: "2-digit" }),
    createdAt: Date.now(),
    phone: data.get("phone").trim(),
    type: data.get("type") || "Para llevar",
    payment: data.get("payment") || "Efectivo",
    notes: data.get("notes").trim(),
    products: products.length ? products : [productFromName(dishes[0]?.name || "Platillo", 1)],
    priority: false,
    prepMinutes: 20
  });
  state.activeModal = null;
  state.currentView = "ordenes-control";
  render();
}

function readImageAsDataUrl(file) {
  return new Promise((resolve) => {
    if (!file || !file.size) return resolve("");
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => resolve("");
    reader.readAsDataURL(file);
  });
}

async function handleDishSubmit(form) {
  const data = new FormData(form);
  const currentDish = dishes.find((item) => item.id === state.editingDishId);
  const uploadedImage = await readImageAsDataUrl(data.get("image"));
  const payload = {
    name: data.get("name").trim(),
    category: data.get("category") || "comidas",
    price: Number(data.get("price")) || 0,
    detail: data.get("detail").trim(),
    status: currentDish?.status || "Activo",
    image: uploadedImage || currentDish?.image || ""
  };
  if (!payload.name) return;
  if (state.editingDishId) {
    Object.assign(currentDish, payload);
  } else {
    dishes.unshift({ id: `dish-${Date.now()}`, ...payload });
  }
  state.activeModal = null;
  state.editingDishId = null;
  state.openDishMenuId = null;
  render();
}

content.addEventListener("click", (event) => {
  const modalTextField = event.target.closest(".modal-card input:not([type='file']):not([data-order-product-count]), .modal-card textarea");
  if (modalTextField) {
    event.stopPropagation();
    modalTextField.focus();
    return;
  }

  const countStep = event.target.closest("[data-count-step]");
  if (countStep) {
    const form = countStep.closest("form");
    const input = form.querySelector("[data-order-product-count]");
    input.value = clampDishCount(Number(input.value) + Number(countStep.dataset.countStep));
    renderOrderProductFields(form, input.value);
    return;
  }

  const countInput = event.target.closest("[data-order-product-count]");
  if (countInput) {
    scheduleOrderProductFields(countInput);
    return;
  }

  const selectOption = event.target.closest("[data-select-option]");
  if (selectOption) {
    const select = selectOption.closest("[data-custom-select]");
    select.querySelector("input").value = selectOption.dataset.selectOption;
    select.querySelector(".custom-select-trigger span").textContent = selectOption.dataset.selectLabel || selectOption.dataset.selectOption;
    select.querySelectorAll("[data-select-option]").forEach((option) => option.classList.toggle("selected", option === selectOption));
    select.classList.remove("open");
    return;
  }

  const selectToggle = event.target.closest("[data-select-toggle]");
  if (selectToggle) {
    const select = selectToggle.closest("[data-custom-select]");
    content.querySelectorAll("[data-custom-select].open").forEach((item) => {
      if (item !== select) item.classList.remove("open");
    });
    select.classList.toggle("open");
    return;
  }

  content.querySelectorAll("[data-custom-select].open").forEach((item) => item.classList.remove("open"));

  const viewTarget = event.target.closest("[data-view-target]");
  if (viewTarget) return setView(viewTarget.dataset.viewTarget);

  const submitOrder = event.target.closest("[data-submit-order]");
  if (submitOrder) return handleOrderSubmit(submitOrder.closest("form"));

  const submitDish = event.target.closest("[data-submit-dish]");
  if (submitDish) return handleDishSubmit(submitDish.closest("form"));

  const dishMenu = event.target.closest("[data-dish-menu]");
  if (dishMenu) {
    state.openDishMenuId = state.openDishMenuId === dishMenu.dataset.dishMenu ? null : dishMenu.dataset.dishMenu;
    return render();
  }

  const modeButton = event.target.closest("[data-order-mode]");
  if (modeButton) {
    state.orderMode = modeButton.dataset.orderMode;
    return render();
  }

  const controlFilter = event.target.closest("[data-control-filter]");
  if (controlFilter) {
    state.controlFilter = controlFilter.dataset.controlFilter;
    return render();
  }

  const historyFilter = event.target.closest("[data-history-filter]");
  if (historyFilter) {
    state.historyFilter = historyFilter.dataset.historyFilter;
    return render();
  }

  const historySort = event.target.closest("[data-history-sort-value]");
  if (historySort) {
    state.historySort = historySort.dataset.historySortValue;
    return render();
  }

  const detail = event.target.closest("[data-detail-order], [data-history-detail]");
  if (detail) {
    state.selectedOrderId = detail.dataset.detailOrder || detail.dataset.historyDetail;
    state.currentView = "detalle-pedido";
    return render();
  }

  const nextStatus = event.target.closest("[data-next-status]");
  if (nextStatus) return advanceOrder(nextStatus.dataset.nextStatus);

  const cancelOrder = event.target.closest("[data-cancel-order]");
  if (cancelOrder) {
    const order = activeOrders.find((item) => item.id === cancelOrder.dataset.cancelOrder);
    if (order) finalizeOrder(order, "Cancelado");
    state.currentView = "ordenes-historial";
    return render();
  }

  const repeat = event.target.closest("[data-repeat-order]");
  if (repeat) return repeatOrder(repeat.dataset.repeatOrder);

  const prep = event.target.closest("[data-prep-time]");
  if (prep) {
    const order = activeOrders.find((item) => item.id === state.selectedOrderId);
    if (order) order.prepMinutes = Number(prep.dataset.prepTime);
    return render();
  }

  const openModal = event.target.closest("[data-open-modal]");
  if (openModal) {
    state.activeModal = openModal.dataset.openModal;
    state.editingDishId = null;
    state.openDishMenuId = null;
    return render();
  }

  const closeModal = event.target.closest("[data-close-modal]");
  if (closeModal) {
    state.activeModal = null;
    state.editingDishId = null;
    state.openDishMenuId = null;
    return render();
  }

  const editDish = event.target.closest("[data-edit-dish]");
  if (editDish) {
    state.editingDishId = editDish.dataset.editDish;
    state.activeModal = "dish";
    state.openDishMenuId = null;
    return render();
  }

  const deleteDish = event.target.closest("[data-delete-dish]");
  if (deleteDish) {
    dishes = dishes.filter((dish) => dish.id !== deleteDish.dataset.deleteDish);
    state.openDishMenuId = null;
    return render();
  }

  const dishFilter = event.target.closest("[data-dish-filter]");
  if (dishFilter) {
    state.dishFilter = dishFilter.dataset.dishFilter;
    state.openDishMenuId = null;
    return render();
  }

  const printTicket = event.target.closest("[data-print-ticket]");
  if (printTicket) {
    state.selectedOrderId = printTicket.dataset.printTicket;
    state.activeModal = "ticket";
    return render();
  }
});

content.addEventListener("input", (event) => {
  if (event.target.matches("[data-history-search], [data-dish-search]")) {
    const selector = event.target.matches("[data-history-search]") ? "[data-history-search]" : "[data-dish-search]";
    const cursor = event.target.selectionStart;
    state.search = event.target.value;
    render();
    const nextInput = content.querySelector(selector);
    if (nextInput) {
      nextInput.focus();
      nextInput.setSelectionRange(cursor, cursor);
    }
  }
  if (event.target.matches("[data-prep-input]")) {
    const order = activeOrders.find((item) => item.id === state.selectedOrderId);
    if (order) order.prepMinutes = Number(event.target.value) || order.prepMinutes;
  }
});

content.addEventListener("keyup", (event) => {
  if (event.target.matches("[data-order-product-count]")) {
    scheduleOrderProductFields(event.target);
  }
});

content.addEventListener("change", (event) => {
  if (event.target.matches("[data-order-product-count]")) {
    renderOrderProductFields(event.target.closest("form"), event.target.value);
  }
});

content.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target.closest("[data-form]");
  if (!form) return;
  if (form.dataset.form === "order") handleOrderSubmit(form);
  if (form.dataset.form === "dish") handleDishSubmit(form);
});

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  render();
});

document.addEventListener("click", (event) => {
  if (event.target.closest(".bell-icon")) {
    state.activeModal = "notifications";
    state.openDishMenuId = null;
    return render();
  }

  const button = event.target.closest("[data-view]");
  if (!button) return;
  state.openDishMenuId = null;
  setView(button.dataset.view);
});

render();
