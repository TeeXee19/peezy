google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Element', 'Activety', { role: 'style' }, { role: 'annotation' } ],
         ['RG', 10.49, '#1cc88a', 'Recharge' ],
         ['GC', 19.30, '#fe9306', 'Gift Cert' ],
         ['RL', 21.45, 'color: #e5e4e2', 'Referral' ]
      ]);

      var view = new google.visualization.DataView(data);

      var options = {
        width: 205,
        height: 140,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.BarChart(document.getElementById("barchart"));
      chart.draw(view, options);
  };


  google.charts.setOnLoadCallback(drawChart2);
  function drawChart2() {
      var data2 = google.visualization.arrayToDataTable([
        ['Element', 'Points', { role: 'style' }, { role: 'annotation' } ],
         ['J', 2349, '#1cc38a', 'John' ],
         ['JC', 1049, '#e74a3b', 'James' ],
         ['JJ', 3323, '#fe9306', 'Jinje' ],
         ['JD', 2005, 'color: #e5e4e2', 'Job' ]
      ]);

      var view = new google.visualization.DataView(data2);

      var options = {
        width: 205,
        height: 140,
        bar: {groupWidth: "80%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
      chart.draw(view, options);
  }