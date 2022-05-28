

// import { createClient } from '@supabase/supabase-js'
supabase = supabase.createClient('https://ycklrcbhtafbydhxitwl.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlja2xyY2JodGFmYnlkaHhpdHdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM3MTYwOTcsImV4cCI6MTk2OTI5MjA5N30.2oXhGKFiwBKyOCxyjypkSXt4Rb7Cq10nTSaYNyGyx0E');

async function onPress(e) {
    e.preventDefault();
    var text = document.getElementById('input').value;
    const { data, error } = await supabase
        .from('information')
        .insert([
            { food_menu: text }
        ])
    console.log(data)

    const{ data2,error2 } = await supabase
    .from('information')
    .select('food_menu')
    .match({id: 1})
}

function hello(){
const{data, error} = onPress();
console.log(data)
}