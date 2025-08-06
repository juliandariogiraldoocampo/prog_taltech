document.addEventListener("DOMContentLoaded", function() {
    // Gráfico de Barras de las Muertes por Accidente Eléctrico
    fetch('data/muertes_accidente_electrico.json')
        .then(response => response.json())
        .then(data => {
            const ctx = document.getElementById('graficoBarrasEmpresas').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.map(item => item.empresa),
                    datasets: [{
                        label: 'Número de Muertos',
                        data: data.map(item => item["frecuencia"]),
                        backgroundColor: 'rgba(235, 54, 72, 0.45)',
                        borderColor: 'rgba(235, 54, 93, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    indexAxis: 'y',
                    responsive: true,
                    scales: {
                        x: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Número de Muertos'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Empresas'
                            }
                        }
                    }
                }
            });
        });   
});
