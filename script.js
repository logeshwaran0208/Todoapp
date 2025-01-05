var input= document.getElementById("input")
        var ul = document.getElementById("list")
        function add_content()
        {
           var list=document.createElement("li") 
           list.innerHTML=input.value+"<button onclick='delete_content(event)' class='rb'> remove</button> "
           ul.append(list)
        }
        function delete_content(event)
        {
            event.target.parentElement.remove()

        }
