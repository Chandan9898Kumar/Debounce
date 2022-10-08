//                          1st    
 
//               Here Debounce applied on Input Text.

// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width">
//   <title>JS Bin</title>
// </head>


// <body>
// <input id="app" onkeyup="button()" type="text" value='' />
  
// <script>
  
//   const debounce=(func)=>{
//     let timer
//     return function(){
//       const args=arguments
//       const context=this
//        console.log(timer)
//       if(timer){
//          clearTimeout(timer)
//       }
//       timer=setTimeout(()=>{
//         func.apply(context,args)
//       },2000) 
      
//     }
    
//   }
  
//   let counter=0
//   const handleclick=()=>{
//   console.log('clicked',counter++)
    
//   }
    
// const button=debounce(handleclick)
    
// </script>

// </body>
// </html>






            ///////////////////                    2nd            //////////////////

//   Here Debounce Applied on  Button.




// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width">
//   <title>JS Bin</title>
// </head>
// <body>
//   <input id="app" type="button" value='click' />
  
// <script>
//   var button=document.getElementById("app")
  

//   const debounce=(func)=>{
//     let timer
//     return function(){
//       const args=arguments
//       const context=this
//        console.log(timer)
//       if(timer){
//          clearTimeout(timer)
//       }
//       timer=setTimeout(()=>{
//         func.apply(context,args)
//       },2000) 
      
//     }
    
//   }
  
//    let counter=0
//    const handleclick=()=>{
//    console.log('clicked',counter++)
    
//   }
    
    
// button.addEventListener('click',debounce(handleclick))  
    
// </script>

// </body>
// </html>
