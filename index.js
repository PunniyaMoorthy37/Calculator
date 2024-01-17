let output=document.getElementById("outputs");
        const btn=document.getElementsByTagName("button");
        function display(num)
        {
           output.value += num;
        }
        function calculate(){
            try{
            output.value=eval(output.value);
            }
            catch(err){
                output.value="SyntaxError";
            }
        }
        function Clear(){
            output.value=" ";
            

        }
        function del(){
            output.value=output.value.slice(0,-1);
        }