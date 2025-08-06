async function cargarDatos() {
    const response = await fetch('data/muertes_accidente_electrico.json');
    const datos = await response.json();
    const fila = document.getElementById('fila');
    fila.innerHTML = '';
    datos.forEach(item => {
        const tr = document.createElement('tr');
        const tdEmpresa = document.createElement('td');
        tdEmpresa.textContent = item.empresa
        const tdFrecuencia = document.createElement('td');
        tdFrecuencia.textContent = item.frecuencia;
    
        const tdEstado = document.createElement('td');
        const estado = item.frecuencia >= 15 ? '⚠️Grave' : '🛑Crítico';
        tdEstado.textContent = estado;

        if (item.frecuencia >= 15) {
            tdFrecuencia.style.backgroundColor = '#FAE7F4'
            tdFrecuencia.style.color = 'red';
            tdEmpresa.style.color = 'red';
            tdEmpresa.style.backgroundColor = '#FAE7F4'
            tdEstado.style.color = 'red';
            tdEstado.style.backgroundColor = '#FAE7F4'
        }

        // Agregar las celdas a la fila
        tr.appendChild(tdEmpresa);
        tr.appendChild(tdFrecuencia);
        tr.appendChild(tdEstado);
        // Agregar la fila al tbody
        fila.appendChild(tr);
    });
}

// Cargar los datos cuando la página esté lista
document.addEventListener('DOMContentLoaded', cargarDatos);