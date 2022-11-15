const books=[["Programming","Robert Cecil","Clean Code","2008"],["C Programming","Reshma Tejas","C Programming","2002"],["Algorithms","Vijay kumar","Data Structure","2004"],
                        ["M1","Ramanujan","Mathematics","1995"],["Engineering mechanics","Russell Hibbeler","Physics","1974"],
                        ["Inorginc chemistry","werner","Chemistry","2000"],["M2","Raman","Mathematics","2003"],
                        ["Operating System","Andrew","Operating systems","2012"],["Python datatypes","eric","Python","2000"],
                        ["Intro to automata","John","Automata","1990"],["Communications Networks","bharath Singh","Networks","2010"],
                        ["Process models","Suvarna Kumar","Software engineering","2000"],["Economics","Engineering Economics","Karan Singh","2001"]];
            var y=books.length;
            function list()
            {
                var x=document.getElementById("Title").value;
                
                for(var i=0;i<y;i++)
                {
                    if(x==books[i][0])
                    {
                        document.write(books[i]);
                        document.write("</br>");
                    }
                }
            
                
            }
            function author()
            {
                var x=document.getElementById("Author").value;
                
                for(var i=0;i<y;i++)
                {
                    if(x==books[i][1])
                    {
                        document.write(books[i]);
                        document.write("</br>");
                    }
                }
             
            }

            function subject()
            {
                var x=document.getElementById("Subject").value;
                
                for(var i=0;i<y;i++)
                {
                    if(x==books[i][2])
                    {
                        document.write(books[i]);
                        document.write("</br>");
                    }
                }
            }

            function year()
            {
                var x=document.getElementById("Year").value;
                
                for(var i=0;i<y;i++)
                {
                    if(x==books[i][3])
                    {
                        document.write(books[i]);
                        document.write("</br>");
                    }
                }
                
            }
                function test()
            {
                    document.write("List of sample books:");
                    document.write("<br><br>");
                    for(var i=0;i<y;i++)
                    {
                    document.write("<tr><td>"+books[i][0]+",</td>");
                    document.write("<td>" + books[i][1] + ",</td>");
                    document.write("<td>" + books[i][2] + ",</td>");
                    document.write("<td>" + books[i][3] + "</td></tr>");
                    document.write("<br><br>")
                    } 
                
            }
