import React from 'react';
class Sort  extends React.Component{
 constructor(props){
     super(props);
     this.state ={
         arr : []
     };
 }
 componentDidMount(){
     const arr = [];
     for( let i=0;i<10;i++)
     {
         arr.push(getRandomInt(1,50));
     }
     this.setState({arr})
 };
 setPauses =(time_in_ms)=> new Promise ((resolve)=>
   setTimeout(resolve,time_in_ms)
 );
 async bubbleSort (){
   var sorted = []; 
   const arraybar = document.getElementsByClassName('graph');
   sorted = this.state.arr;
   for(let i=0;i<sorted.length;i++)
   {
       
       await this.setPauses(100);
       for(let j=0;j<sorted.length-i;j++)
       { 
           await this.setPauses(500);   
      
           if(sorted[j]<sorted[j-1])
           {  
               
                arraybar[j-1].style.backgroundColor="white";    
                arraybar[j].style.backgroundColor="white";          
                setTimeout(()=>{
                this.setState({swap:j+1});
                var temp;
                temp = sorted[j];
                sorted[j]=sorted[j-1];
                sorted[j-1]=temp;

            },400)              
            }  
            setTimeout(()=>{
                arraybar[j].style.backgroundColor="yellow"; 
            },1000);
            this.setState({
                arr:sorted,             
            }) 
        }       
   }  
 };
 
render(){
    const {arr}=this.state;
    return(
        <div className="container">
        <div className="row justify-content-center">
         <div className="col-lg-12 justify-content-center ">   
        <div className="arr">
            {arr.map((val,index)=>(
               <div key={index} style={{ height:`${val}vh`,}} className="graph"><div className="text">{val}</div></div>
            ))}
        </div>
        </div>
        </div>
        <div className="py-5">
            <p>Bubble Sort</p>
        <button className="btn btn-danger" onClick={() => this.bubbleSort()}>SORT</button>
        </div>
        <legend><i className ="fa fa-circle"> : Compared</i></legend>
        </div>
        );
    }
}

function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export default Sort;