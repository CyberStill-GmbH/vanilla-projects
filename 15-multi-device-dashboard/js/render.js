const statsContainer = document.getElementById('statsContainer');
const tasksContainer = document.getElementById('tasksContainer');
const eventsContainer = document.getElementById('eventsContainer');

function renderStats() {
    if (!statsContainer) return;

    let htmlString = '';

    statsData.forEach(stat => {
        const iconClass = stat.trendType === 'up' 
            ? 'stat-card__sub--up' 
            : 'stat-card__sub--down';

        htmlString += `
        <div class="stat-card stat-card--${stat.color}">
            <span class="stat-card__label">${stat.label}</span>
            <div class="stat-card__value">${stat.value}</div>
            <div class="stat-card__sub ${iconClass}">
            ${stat.trend}
            </div>
        </div>
        `;
    });

    statsContainer.innerHTML = htmlString;
}

function renderTasks() {
  if (!tasksContainer) return;

  let htmlString = '';
  
  tasksData.forEach(task => {
    htmlString += `
      <div class="task-list-item task-list-item--${task.priority}">
        <div class="task-list-item__body">
          <h4 class="task-list-item__title">${task.title}</h4>
          <div class="task-list-item__meta">
            <span class="badge badge--dot badge--${task.status}">${task.status}</span>
            <span class="task-card__due">Vence: ${task.dueDate}</span>
            <span class="task-card__assignee">Asignado: ${task.assignee}</span>
          </div>
        </div>
      </div>
    `;
  });

  tasksContainer.innerHTML = htmlString;
}

function renderEvents() {
  if (!eventsContainer) return;

  let htmlString = '';

  eventsData.forEach(event => {
    htmlString += `
      <div class="event-item event-item--${event.type}">
        <div class="event-item__accent"></div>
        <div class="event-item__body">
          <div class="event-item__top">
            <span class="event-item__name">${event.name}</span>
          </div>
          <div class="event-item__bottom">
            <span class="event-item__date">📅 ${event.date}</span>
            <span class="event-item__location">📍 ${event.location}</span>
          </div>
        </div>
      </div>
    `;
  });

  eventsContainer.innerHTML = htmlString;
}

document.addEventListener('DOMContentLoaded', () => {
    renderStats();
    renderTasks();
    renderEvents();
});