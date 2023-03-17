const request=async (url,method)=>{
    const res=await fetch(url,{
        method
    }); 

    try{
        const result=await res.json();
        return result;
    }catch{
        return {};
    }
};

export const get=request.bind(null,'GET');
export const post=request.bind(null,'POST');
export const put=request.bind(null,'PUT');
export const del=request.bind(null,'DELETE');
export const patch=request.bind(null,'PATCH');
