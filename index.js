if (localStorage.getItem("mode")){
    document.body.className = localStorage.getItem("mode")
}

$("input[type=checkbox]").click(function(){
    if (document.body.className==="dark"){
        document.body.className = "light"
        localStorage.setItem("mode","light")
    }else{
        document.body.className = "dark"
        localStorage.setItem("mode","dark")
    }
})
setInterval(function(){
    $("#dot-effect").text($("#dot-effect").html()+" .")
    if ($("#dot-effect").html().length>6){
        $("#dot-effect").html("")
    }
},1200)

const API_KEY = "key5jT5qCDBKgse4b"
$.ajax({
    url: `https://api.airtable.com/v0/appx2Wv0bPmz1fVxz/Listing?api_key=${API_KEY}`,
    method: "GET",
    beforeSend:function(){
        $("#listing").html(`<div class="spinner-border my-5" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                            `);
    },
    success: function(result) {
        $("#listing").html("")
        result.records.forEach(item=>{
            console.log(item.fields.Language[1])
            $("#listing").append(`<div class="project-card col-md-4 col-sm-12" > 
                                <a href="${item.fields.Link}" style="color: white;">
                                    <div class="front" style="background-image:url(${item.fields.Image[0].url});">
                                        <div class="inner">
                                            <li>${item.fields.Language[0]}</li>
                                            ${(item.fields.Language[1]==undefined)?"":`<li>${item.fields.Language[1]}</li>`}
                                        </div>
                                    </div>
                                    <div class="back">
                                        <div class="inner">
                                            <p>${item.fields.Name}</p>
                                            <p>${item.fields.Description}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            `
        )
      })
    },
    error: function(error) {
      console.log(`Error: ${error}`);
    }
});

$("#toAbout").click(function(){
    document.getElementById("about").scrollIntoView({ behavior: 'smooth', block: 'center' })
})

$("#toProjects").click(function(){
    document.getElementById("projects").scrollIntoView({ behavior: 'smooth', block: 'start' })
})

$("#toContact").click(function(){
    document.getElementById("contact").scrollIntoView({ behavior: 'smooth', block: 'start' })
})