const screens = [
  {
    title: "Pantalla 1",
    orders: [
      {
        id: "#1042",
        name: "Juan Perez",
        status: "Pendiente",
        tone: "danger",
        time: "12:30 PM (en 15 min)",
        address: "Av. Revolucion 1234, Col. Centro",
        phone: "55 1234 5678",
        summary: "2x Menu del Dia, 1x Agua de Horchata"
      },
      {
        id: "#1041",
        name: "Maria Gonzalez",
        status: "En cocina",
        tone: "warning",
        time: "12:15 PM (hace 5 min)",
        address: "Calle Juarez 45, Col. Roma",
        phone: "55 9876 5432",
        summary: "1x Pechuga Asada, 1x Sopa de Pasta"
      },
      {
        id: "#1043",
        name: "Carlos Ruiz",
        status: "Pendiente",
        tone: "danger",
        time: "12:45 PM (en 35 min)",
        address: "Insurgentes Sur 999, Piso 4",
        phone: "55 3333 4444",
        summary: "3x Tacos Dorados, 1x Consome"
      }
    ]
  },
  {
    title: "Pantalla 2",
    orders: [
      {
        id: "#1042",
        name: "Juan Perez",
        status: "Pendiente",
        tone: "danger",
        time: "12:30 PM (en 15 min)",
        address: "Av. Revolucion 1234, Col. Centro",
        phone: "55 1234 5678",
        summary: "2x Menu del Dia, 1x Agua de Jamaica"
      },
      {
        id: "#1041",
        name: "Maria Gonzalez",
        status: "En cocina",
        tone: "warning",
        time: "12:15 PM (hace 5 min)",
        address: "Calle Juarez 45, Col. Roma",
        phone: "55 9876 5432",
        summary: "1x Pechuga Asada, 1x Sopa de Verduras"
      },
      {
        id: "#1043",
        name: "Carlos Ruiz",
        status: "Pendiente",
        tone: "danger",
        time: "12:45 PM (en 35 min)",
        address: "Insurgentes Sur 999, Piso 4",
        phone: "55 3333 4444",
        summary: "3x Tacos Dorados, 1x Consome"
      }
    ]
  },
  {
    title: "Pantalla 3",
    orders: [
      {
        id: "#1042",
        name: "Juan Perez",
        status: "Pendiente",
        tone: "danger",
        time: "12:30 PM (en 15 min)",
        address: "Av. Revolucion 1234, Col. Centro",
        phone: "55 1234 5678",
        summary: "2x Menu del Dia, 1x Agua de Horchata"
      },
      {
        id: "#1041",
        name: "Maria Gonzalez",
        status: "En cocina",
        tone: "warning",
        time: "12:15 PM (hace 5 min)",
        address: "Calle Juarez 45, Col. Roma",
        phone: "55 9876 5432",
        summary: "1x Pechuga Asada, 1x Sopa de Arroz"
      },
      {
        id: "#1043",
        name: "Carlos Ruiz",
        status: "Pendiente",
        tone: "danger",
        time: "12:45 PM (en 35 min)",
        address: "Insurgentes Sur 999, Piso 4",
        phone: "55 3333 4444",
        summary: "3x Tacos Dorados, 1x Consome"
      }
    ]
  },
  {
    title: "Pantalla 4",
    orders: [
      {
        id: "#1042",
        name: "Juan Perez",
        status: "Pendiente",
        tone: "danger",
        time: "12:30 PM (en 15 min)",
        address: "Av. Revolucion 1234, Col. Centro",
        phone: "55 1234 5678",
        summary: "2x Menu del Dia, 1x Agua de Horchata"
      },
      {
        id: "#1041",
        name: "Maria Gonzalez",
        status: "En cocina",
        tone: "warning",
        time: "12:15 PM (hace 5 min)",
        address: "Calle Juarez 45, Col. Roma",
        phone: "55 9876 5432",
        summary: "1x Pechuga Asada, 1x Sopa de Pasta"
      },
      {
        id: "#1043",
        name: "Carlos Ruiz",
        status: "Pendiente",
        tone: "danger",
        time: "12:45 PM (en 35 min)",
        address: "Insurgentes Sur 999, Piso 4",
        phone: "55 3333 4444",
        summary: "3x Tacos Dorados, 1x Consome"
      }
    ]
  }
];

const inventoryItems = [
  { name: "Tortillas", stock: "42 paquetes", status: "Suficiente" },
  { name: "Pollo", stock: "8 kg", status: "Revisar" },
  { name: "Arroz", stock: "12 kg", status: "Suficiente" },
  { name: "Agua de horchata", stock: "5 litros", status: "Bajo" },
  { name: "Verduras mixtas", stock: "7 kg", status: "Suficiente" },
  { name: "Desechables", stock: "35 piezas", status: "Revisar" }
];

const dishes = [
  { name: "Menu del dia", price: "$85", detail: "Guiso, arroz, frijol y agua" },
  { name: "Pechuga asada", price: "$95", detail: "Con ensalada y sopa" },
  { name: "Tacos dorados", price: "$72", detail: "Orden de 4 piezas" },
  { name: "Sopa de pasta", price: "$35", detail: "Porcion individual" },
  { name: "Consome", price: "$40", detail: "Caldo con arroz y verduras" },
  { name: "Agua fresca", price: "$25", detail: "Horchata, jamaica o limon" }
];

const content = document.querySelector("#content");
const dots = document.querySelector("#screenDots");
const prev = document.querySelector("#prevScreen");
const next = document.querySelector("#nextScreen");
const searchInput = document.querySelector("#searchInput");
const navButtons = document.querySelectorAll("[data-view]");
let currentScreen = 0;
let currentView = "ordenes";
let orderFilter = "pendientes";

function titleBlock(title, subtitle, extra = "") {
  return `
    <div class="title-row">
      <div>
        <h1>${title}</h1>
        <p>${subtitle}</p>
      </div>
      ${extra}
    </div>
  `;
}

function orderTemplate(order) {
  const badgeClass = order.tone === "warning" ? "badge warning" : "badge";
  const button = order.completed
    ? `<button class="primary secondary" type="button" data-restore-order="${order.id}">Regresar</button>`
    : `<button class="primary" type="button" data-complete-order="${order.id}">Marcar lista</button>`;

  return `
    <article class="card">
      <div class="card-head">
        <div>
          <h2 class="order-id">${order.id}</h2>
          <div class="name">${order.name}</div>
        </div>
        <span class="${badgeClass}">${order.status}</span>
      </div>

      <div class="meta">
        <div class="meta-row"><span class="tiny-icon clock"></span><span>${order.time}</span></div>
        <div class="meta-row"><span class="tiny-icon pin"></span><span>${order.address}</span></div>
        <div class="meta-row"><span class="tiny-icon phone"></span><span>${order.phone}</span></div>
      </div>

      <div class="summary">
        <span>Resumen</span>
        <p>${order.summary}</p>
      </div>

      <div class="actions">
        <button type="button">Detalles</button>
        ${button}
      </div>
    </article>
  `;
}

function renderOrders() {
  const filters = `
    <div class="segmented" role="tablist" aria-label="Estado de ordenes">
      <button class="${orderFilter === "pendientes" ? "selected" : ""}" type="button" data-order-filter="pendientes">Pendientes</button>
      <button class="${orderFilter === "completadas" ? "selected" : ""}" type="button" data-order-filter="completadas">Completadas</button>
    </div>
  `;
  const visibleOrders = screens[currentScreen].orders.filter((order) => {
    return orderFilter === "completadas" ? order.completed : !order.completed;
  });
  const emptyMessage = orderFilter === "completadas"
    ? "Todavia no hay ordenes completadas."
    : "No hay ordenes pendientes en esta pantalla.";

  content.innerHTML = `
    ${titleBlock("Ordenes activas", "Administra pedidos entrantes y tickets en proceso.", filters)}
    ${
      visibleOrders.length
        ? `<div class="orders" id="orders">${visibleOrders.map(orderTemplate).join("")}</div>`
        : `<div class="empty-state compact"><h2>${emptyMessage}</h2><p>Cambia de pantalla o revisa el otro estado.</p></div>`
    }
  `;
}

function renderInventory() {
  content.innerHTML = `
    ${titleBlock("Inventario", "Consulta existencias y productos que necesitan revision.")}
    <div class="data-grid">
      ${inventoryItems.map((item) => `
        <article class="data-card">
          <div>
            <h2>${item.name}</h2>
            <p>${item.stock}</p>
          </div>
          <span class="status-pill">${item.status}</span>
        </article>
      `).join("")}
    </div>
  `;
}

function renderDishes() {
  content.innerHTML = `
    ${titleBlock("Platillos", "Lista de productos disponibles para venta.")}
    <div class="data-grid">
      ${dishes.map((dish) => `
        <article class="menu-card">
          <div>
            <h2>${dish.name}</h2>
            <p>${dish.detail}</p>
          </div>
          <strong>${dish.price}</strong>
        </article>
      `).join("")}
    </div>
  `;
}

function renderStats() {
  content.innerHTML = `
    ${titleBlock("Estadisticas", "Resumen rapido del servicio de hoy.")}
    <div class="stats-grid">
      <article class="stat-card"><span>Ordenes</span><strong>24</strong><p>8 pendientes</p></article>
      <article class="stat-card"><span>Ventas</span><strong>$3,420</strong><p>Turno vespertino</p></article>
      <article class="stat-card"><span>Tiempo promedio</span><strong>18 min</strong><p>Preparacion por pedido</p></article>
      <article class="stat-card"><span>Producto lider</span><strong>Menu del dia</strong><p>12 ordenes</p></article>
    </div>
    <div class="mini-chart" aria-label="Grafica de actividad">
      <span style="height: 42%"></span>
      <span style="height: 66%"></span>
      <span style="height: 48%"></span>
      <span style="height: 78%"></span>
      <span style="height: 58%"></span>
      <span style="height: 88%"></span>
      <span style="height: 72%"></span>
    </div>
  `;
}

function renderSettings() {
  content.innerHTML = `
    ${titleBlock("Ajustes", "Configuracion general del punto de venta.")}
    <div class="settings-panel">
      <label><span>Nombre del negocio</span><input value="Sazon" /></label>
      <label><span>Horario activo</span><input value="12:00 PM - 10:00 PM" /></label>
      <label><span>Telefono</span><input value="55 0000 0000" /></label>
      <button type="button" class="save-button">Guardar cambios</button>
    </div>
  `;
}

function renderLogout() {
  content.innerHTML = `
    ${titleBlock("Salir", "Confirma si deseas cerrar la sesion del sistema.")}
    <div class="empty-state">
      <h2>Sesion activa</h2>
      <p>Este prototipo no cierra una cuenta real, solo muestra el flujo visual para el cliente.</p>
      <button type="button" class="save-button" data-view-target="ordenes">Volver a ordenes</button>
    </div>
  `;
}

function renderDots() {
  dots.innerHTML = screens
    .map((screen, index) => {
      const active = index === currentScreen ? " active" : "";
      return `<button class="dot${active}" type="button" aria-label="${screen.title}" data-screen="${index}"></button>`;
    })
    .join("");
}

function updateSearchPlaceholder() {
  const labels = {
    inventario: "Buscar inventario...",
    ordenes: "Buscar ordenes...",
    platillos: "Buscar platillos...",
    estadisticas: "Buscar metricas...",
    ajustes: "Buscar ajustes...",
    salir: "Buscar..."
  };
  searchInput.placeholder = labels[currentView];
}

function updateNav() {
  navButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.view === currentView);
  });
}

function render() {
  const renderers = {
    inventario: renderInventory,
    ordenes: renderOrders,
    platillos: renderDishes,
    estadisticas: renderStats,
    ajustes: renderSettings,
    salir: renderLogout
  };
  renderers[currentView]();
  renderDots();
  updateNav();
  updateSearchPlaceholder();
}

function setView(view) {
  currentView = view;
  render();
}

function goTo(index) {
  currentScreen = (index + screens.length) % screens.length;
  currentView = "ordenes";
  render();
}

function updateOrderStatus(orderId, completed) {
  const order = screens[currentScreen].orders.find((item) => item.id === orderId);
  if (!order) return;
  order.completed = completed;
  order.status = completed ? "Completada" : "Pendiente";
  order.tone = completed ? "warning" : "danger";
  if (completed) orderFilter = "completadas";
  render();
}

prev.addEventListener("click", () => goTo(currentScreen - 1));
next.addEventListener("click", () => goTo(currentScreen + 1));

dots.addEventListener("click", (event) => {
  const target = event.target.closest("[data-screen]");
  if (target) goTo(Number(target.dataset.screen));
});

content.addEventListener("click", (event) => {
  const completeButton = event.target.closest("[data-complete-order]");
  if (completeButton) {
    updateOrderStatus(completeButton.dataset.completeOrder, true);
    return;
  }

  const restoreButton = event.target.closest("[data-restore-order]");
  if (restoreButton) {
    updateOrderStatus(restoreButton.dataset.restoreOrder, false);
    return;
  }

  const filterButton = event.target.closest("[data-order-filter]");
  if (filterButton) {
    orderFilter = filterButton.dataset.orderFilter;
    render();
    return;
  }

  const viewTarget = event.target.closest("[data-view-target]");
  if (viewTarget) setView(viewTarget.dataset.viewTarget);
});

navButtons.forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.view));
});

render();
