import React from 'react'

const Work = () => {
  const LINK_WORKS={
    reactProject:"https://miro.medium.com/max/1400/1*I4l_Z7spPbDKmIUwcV4iwg.png",
  }
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0b1122]">
        
        <div className=' max-w-[1000px] mx-auto p-4 flex-col justify-center w-full h-full'>
          
      <div className='pb-8'>
        <p className='text-2xl md:text-4xl  font-bold inline border-b-4 border-slate-500'>Work</p>
        <p className='py-4 text-slate-300 text-2xl'>// Check out my projects</p>
      </div>

      <div className='grid sm:grid-cols-4 md:grid-cols-3 gap-8 '>
      
       {/*cart */}
       <div  style={{backgroundImage:`url(${LINK_WORKS.reactProject})`}} id="content-div" 
       className={`shadow-md cursor-pointer shadow-[#0e1017] group container rounded-md flex justify-center items-center mx-auto`}>
        
        <div className='opacity-0 group-hover:opacity-100'>
          <span className='text-slate-200 tracking-wider font-bold text-2xl'>
          React Js aplication
          </span>
          
          <div className='pt-8 text-center flex gap-4 justify-center'>

            <a href="#" ><button className='text-2xl rounded-md font-bold px-3 py-2  text-gray-400 bg-slate-100 mb-2'>Demo</button></a>
            <a href=""><button className='text-2xl rounded-md font-bold  px-3 py-2 text-gray-400 bg-slate-100 mb-2' >Code</button></a>
          </div>
        </div>

       </div>


       <div  style={{backgroundImage:`url(${LINK_WORKS.reactProject})`}} id="content-div" 
       className={`shadow-sm cursor-pointer shadow-[#191e2b] group container rounded-md flex justify-center items-center mx-auto`}>
        
        <div className='opacity-0 group-hover:opacity-100'>
          <span className='text-slate-200 tracking-wider font-bold text-2xl'>
          React Js aplication
          </span>
          
          <div className='pt-8 text-center flex gap-4 justify-center'>

            <a href="#" ><button className='text-2xl rounded-md font-bold px-3 py-2  text-gray-400 bg-slate-100 mb-2'>Demo</button></a>
            <a href=""><button className='text-2xl rounded-md font-bold  px-3 py-2 text-gray-400 bg-slate-100 mb-2' >Code</button></a>
          </div>
        </div>

       </div>


       <div  style={{backgroundImage:`url(${LINK_WORKS.reactProject})`}} id="content-div" 
       className={`shadow-sm cursor-pointer shadow-[#191e2b] group container rounded-md flex justify-center items-center mx-auto`}>
        
        <div className='opacity-0 group-hover:opacity-100'>
          <span className='text-slate-200 tracking-wider font-bold text-2xl'>
          React Js aplication
          </span>
          
          <div className='pt-8 text-center flex gap-4 justify-center'>

            <a href="#" ><button className='text-2xl rounded-md font-bold px-3 py-2  text-gray-400 bg-slate-100 mb-2'>Demo</button></a>
            <a href=""><button className='text-2xl rounded-md font-bold  px-3 py-2 text-gray-400 bg-slate-100 mb-2' >Code</button></a>
          </div>
        </div>

       </div>

       <div  style={{backgroundImage:`url(${LINK_WORKS.reactProject})`}} id="content-div" 
       className={`shadow-sm cursor-pointer shadow-[#191e2b] group container rounded-md flex justify-center items-center mx-auto`}>
        
        <div className='opacity-0 group-hover:opacity-100'>
          <span className='text-slate-200 tracking-wider font-bold text-2xl'>
          React Js aplication
          </span>
          
          <div className='pt-8 text-center flex gap-4 justify-center'>

            <a href="#" ><button className='text-2xl rounded-md font-bold px-3 py-2  text-gray-400 bg-slate-100 mb-2'>Demo</button></a>
            <a href=""><button className='text-2xl rounded-md font-bold  px-3 py-2 text-gray-400 bg-slate-100 mb-2' >Code</button></a>
          </div>
        </div>

       </div>

       <div  style={{backgroundImage:`url(${LINK_WORKS.reactProject})`}} id="content-div" 
       className={`shadow-sm cursor-pointer shadow-[#191e2b] group container rounded-md flex justify-center items-center mx-auto`}>
        
        <div className='opacity-0 group-hover:opacity-100'>
          <span className='text-slate-200 tracking-wider font-bold text-2xl'>
          React Js aplication
          </span>
          
          <div className='pt-8 text-center flex gap-4 justify-center'>

            <a href="#" ><button className='text-2xl rounded-md font-bold px-3 py-2  text-gray-400 bg-slate-100 mb-2'>Demo</button></a>
            <a href=""><button className='text-2xl rounded-md font-bold  px-3 py-2 text-gray-400 bg-slate-100 mb-2' >Code</button></a>
          </div>
        </div>

       </div>

       <div  style={{backgroundImage:`url(${LINK_WORKS.reactProject})`}} id="content-div" 
       className={`shadow-sm cursor-pointer shadow-[#191e2b] group container rounded-md flex justify-center items-center mx-auto`}>
        
        <div className='opacity-0 group-hover:opacity-100'>
          <span className='text-slate-200 tracking-wider font-bold text-2xl'>
          React Js aplication
          </span>
          
          <div className='pt-8 text-center flex gap-4 justify-center'>

            <a href="#" ><button className='text-2xl rounded-md font-bold px-3 py-2  text-gray-400 bg-slate-100 mb-2'>Demo</button></a>
            <a href=""><button className='text-2xl rounded-md font-bold  px-3 py-2 text-gray-400 bg-slate-100 mb-2' >Code</button></a>
          </div>
        </div>

       </div>

       

       


       


       

       


       
      


      </div>


        </div>
    </div>
  )
}

export default Work