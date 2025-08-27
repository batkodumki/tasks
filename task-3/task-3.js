document.querySelector("#send").onclick = function() {
  let country = document.querySelector("#country").value;
  const url = 'https://universities.hipolabs.com/search?country=' + encodeURIComponent(country.trim());


  fetch(url)
    .then(r => r.json())
    .then(data => {
      let table = "<table border='1'><tr><th>№</th><th>Name</th><th>Country</th><th>Code</th><th>Domains</th><th>Website</th></tr>";
      for (let i=0; i<data.length; i++) {
        table += "<tr>";
        table += "<td>"+(i+1)+"</td>";
        table += "<td>"+data[i].name+"</td>";
        table += "<td>"+data[i].country+"</td>";
        table += "<td>"+data[i].alpha_two_code+"</td>";
        table += "<td>"+data[i].domains.join(", ")+"</td>";
        table += "<td><a href='"+data[i].web_pages[0]+"' target='_blank'>Site</a></td>";
        table += "</tr>";
      }
      table += "</table>";
      document.querySelector("#results").innerHTML = table;
    })
}

document.querySelector("#reset").onclick = function() {
  document.querySelector("#country").value = "";
  document.querySelector("#results").innerHTML = "";
}
