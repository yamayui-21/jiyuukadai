


const items = document.querySelectorAll('.item');
const btns = document.querySelectorAll('.append');
const append_cls = document.querySelectorAll('[class*=append]');

for (let i = 0; i < items.length; i++) {
  items[i].classList.add("hidden");
  let elements = items[i].querySelectorAll("*");
  for (let j = 0; j < elements.length; j++) {
    elements[j].classList.add("hidden");
  }
}
const initial_active = 0;
items[initial_active].classList.remove("hidden");
let elements = items[initial_active].querySelectorAll("*");
for (let j = 0; j < elements.length; j++) {
   elements[j].classList.remove("hidden");
}


let initial_flag = true;
let prev_active = 0;
for(let k = 0; k< append_cls.length; k++){
  append_cls[k].addEventListener("click", function() {
    console.log("next");
    //zoom_out
    if(initial_flag){
      // items[initial_active].classList.add("zoom_out");
      // zoom_out
      let initail_item_child = items[initial_active].querySelectorAll(".item-child");
      for (let j = 0; j < initail_item_child.length; j++) {
        initail_item_child[j].classList.add("zoom_out");
      }
      initial_flag = false;
      console.log("initail");
      setTimeout(()=>{
        //zoom_out 初期化
        for (let j = 0; j < initail_item_child.length; j++) {
          initail_item_child[j].classList.remove("zoom_out");
        }
        // items[initial_active].classList.remove("zoom_out");
      },800);
    }else{
      // zoom_out 
      let prev_item_child = items[prev_active].querySelectorAll(".item-child");
      for (let j = 0; j < prev_item_child.length; j++) {
        prev_item_child[j].classList.add("zoom_out");
      }
      // items[prev_active].classList.add("zoom_out");
      console.log("zoom_out_k:"+prev_active);
      setTimeout(()=>{
        //zoom_in 初期化
        for (let j = 0; j < prev_item_child.length; j++) {
          prev_item_child[j].classList.remove("zoom_out");
        }
        // items[prev_active].classList.remove("zoom_out");
      },800);
    }
    
    setTimeout(() => {
        //非表示
        for (let i = 0; i < items.length; i++) {
          items[i].classList.add("hidden");
          let elements = items[i].querySelectorAll("*");
          for (let j = 0; j < elements.length; j++) {
             elements[j].classList.add("hidden");
          }
        }
        //表示
        items[k].classList.remove("hidden");
        let elements = items[k].querySelectorAll("*");
        for (let j = 0; j < elements.length; j++) {
           elements[j].classList.remove("hidden");
        }
        console.log("zoom_in_k:"+k);
        //zoom_in
        let k_item_child = items[k].querySelectorAll(".item-child");
        for (let j = 0; j < k_item_child.length; j++) {
          k_item_child[j].classList.add("zoom_in");
        }
        // items[k].classList.add("zoom_in");
        setTimeout(()=>{
          //zoom_in 初期化
          for (let j = 0; j < k_item_child.length; j++) {
            k_item_child[j].classList.remove("zoom_in");
          }
        // items[k].classList.remove("zoom_in");
        },800);
      }, 800);
      

      prev_active = k;
      console.log("push:"+prev_active);
    });
  }
  



// if(prev_active == k){
//   console.log("true");
// }else{
//   console.log("false");
// }

// const items = document.querySelectorAll('.item');
// const btns = document.querySelectorAll('.append');
// const append_cls = document.querySelectorAll('[class*=append]');

// for (let i = 0; i < items.length; i++) {
//   items[i].classList.add("hidden");
//   let elements = items[i].querySelectorAll("*");
//   for (let j = 0; j < elements.length; j++) {
//     elements[j].classList.add("hidden");
//   }
// }
// items[0].classList.remove("hidden");
// let elements = items[0].querySelectorAll("*");
// for (let j = 0; j < elements.length; j++) {
//    elements[j].classList.remove("hidden");
// }


// for(let k = 0; k< append_cls.length; k++){
//   append_cls[k].addEventListener("click", function() {
    
//     //非表示
//     for (let i = 0; i < items.length; i++) {
//       items[i].classList.add("hidden");
//       let elements = items[i].querySelectorAll("*");
//       for (let j = 0; j < elements.length; j++) {
//          elements[j].classList.add("hidden");
//       }
//     }
//     //表示
//     items[k].classList.remove("hidden");
//     let elements = items[k].querySelectorAll("*");
//       for (let j = 0; j < elements.length; j++) {
//          elements[j].classList.remove("hidden");
//       }
//     items[k].classList.add("zoom_in");
//   });
// }

