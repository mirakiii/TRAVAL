        function openLink(evt, linkName){
            var i, tabLinks, myLinks;

            myLinks=document.getElementsByClassName("myLink");
            //avoid displaying any blocks (Flights, hotels, cab)
            for(i=0; i<myLinks.length; i++){
                myLinks[i].style.display="none";
            }

            //to remove active btn effect
            tabLinks=document.getElementsByClassName("tabLink");
            for(i=0; i<myLinks.length; i++){
                tabLinks[i].className = tabLinks[i].className.replace("tabBtnActive", "");
                // tabLinks[i].className=tabLinks[i].className.replace(" w3-red", "");
            }
            //displaying specific bg pic
            

            //displaying specific block
            document.getElementById(linkName).style.display="block";
            evt.currentTarget.className+="tabBtnActive";
        }
        //starting itself flight is clicked
        document.getElementsByClassName("tabLink")[0].click();