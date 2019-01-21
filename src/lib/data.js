import React from 'react'
export const random = (int)=>{
    const random= Math.ceil(Math.random() * 10)
    return random % int
}
export const brands = ['Cadillac', 'Subaru', 'Volvo']
export const statuses = ['unopened', 'opened', 'pending', 'solved']
export const singleDataJson = (brand) =>(
    {
        brand: brand? brand: brands[random(3)],
        model: 'XS',
        complaint: <div><h6>Door key doesnt work</h6><p> how can i repair this if ...</p></div>,
        createdBy: 'admin',
        createdOn: '12/12/2018',
        lastUpdatedDate: '12/30/2018',
        status: statuses[random(4)]
    }
)
export const generateData = (int,brand)=>{
    let data = []
    for(let i = 0; i < int; i++){
        data = [...data, brand? singleDataJson(brand):singleDataJson()]
    }
    return data
}

export const breakArrayInParts = (arr, part)=>{
    let ret =[]
    console.log(arr.length, part, part<arr.length)
    let i = 0
    while(i<arr.length){
        ret.push(arr.slice(i, i+part))
        i += part
    }
    return ret.map(
        (arr, i)=>({
            page: i+1,
            len: arr.length,
            start: i *part,
            data: arr
        })
    )
}

export const baseUrl = 'bogusForTheMoment'