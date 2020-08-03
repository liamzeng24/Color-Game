var level = 6;
var colors = [];
var b_e = document.querySelector("#b_e");
var b_h = document.querySelector("#b_h");

function regenerate()
{
    for(var i = 0; i < level; i++)
    {
        var r = Math.floor(Math.random() * 255.99).toString(10);
        var g = Math.floor(Math.random() * 255.99).toString(10);
        var b = Math.floor(Math.random() * 255.99).toString(10);
        colors[i] = "rgb(" + r + ", " + g + ", " + b + ")";
    }
}

regenerate();



var banner = document.querySelector("#banner");
var r_f = "You Win!";
var l_f = "Try Again!";
var stt = "Start Guessing!";

var t_number = Math.floor(Math.random() * (level - 0.01));
var target = colors[t_number];
var the_display = document.querySelector("h1");

var f_bb = document.querySelector("div span");
f_bb.textContent = stt;


the_display.textContent = target;

var squares = document.querySelectorAll(".square");

for(var i = 0; i < level; i++)
{
    squares[i].style.backgroundColor = colors[i];
    // click listener;

    squares[i].addEventListener("click", function(){
        if(this.style.backgroundColor == target)
        {
            winning();
            f_bb.textContent = r_f;
        }
        else
        {
            this.style.backgroundColor = "#232323";
            f_bb.textContent = l_f; 
            reset_b.textContent = "New Color";   
        }
    });
}

function winning(){
    for(var i = 0; i < level; i++)
    {
        squares[i].style.backgroundColor = target;
    }
    banner.style.backgroundColor = target;   
    reset_b.textContent = "Play Again?";
}

var reset_b = document.querySelector("#new_color");

reset_b.addEventListener("click", function(){
    banner.style.backgroundColor = "black";
    f_bb.textContent = stt;
    regenerate();
    t_number = Math.floor(Math.random() * (level - 0.01));
    target = colors[t_number];
    the_display.textContent = target;

    for(var i = 0; i < level; i++)
    {
        squares[i].style.backgroundColor = colors[i];
        // click listener;

        squares[i].addEventListener("click", function(){
            if(this.style.backgroundColor == target)
            {
                winning();
                f_bb.textContent = r_f;
            }
            else
            {
                this.style.backgroundColor = "#232323";
                f_bb.textContent = l_f;  
                reset_b.textContent = "New Color";  
            }
        });
    }       
});

b_e.addEventListener("click", function(){
    if(level == 6)
    {
        f_bb.textContent = stt;
        b_e.classList.toggle("selected");
        b_h.classList.toggle("selected");
        level = 3;
        banner.style.backgroundColor = "black";
        regenerate();
        t_number = Math.floor(Math.random() * (level - 0.01));
        target = colors[t_number];
        the_display.textContent = target;
    
        for(var i = 0; i < level; i++)
        {
            squares[i].style.backgroundColor = colors[i];
            // click listener;
    
            squares[i].addEventListener("click", function(){
                if(this.style.backgroundColor == target)
                {
                    winning();
                    f_bb.textContent = r_f;
    
                }
                else
                {
                    this.style.backgroundColor = "#232323";
                    f_bb.textContent = l_f;  
                    reset_b.textContent = "New Color";  
                }
            });
        }
        for(var i = 3; i < 6; i++)
        {
            squares[i].style.backgroundColor = "#232323";
        }
    }
});

b_h.addEventListener("click", function(){
    if(level == 3)
    {
        f_bb.textContent = stt;
        b_e.classList.toggle("selected");
        b_h.classList.toggle("selected");
        level = 6;
        banner.style.backgroundColor = "black";
        regenerate();
        t_number = Math.floor(Math.random() * (level - 0.01));
        target = colors[t_number];
        the_display.textContent = target;
    
        for(var i = 0; i < level; i++)
        {
            squares[i].style.backgroundColor = colors[i];
            // click listener;
    
            squares[i].addEventListener("click", function(){
                if(this.style.backgroundColor == target)
                {
                    winning();
                    f_bb.textContent = r_f;
    
                }
                else
                {
                    this.style.backgroundColor = "#232323";
                    f_bb.textContent = l_f;  
                    reset_b.textContent = "New Color";  
                }
            });
        }
    }
})