const random = (int)=>{
    const random= Math.ceil(Math.random() * 10)
    return random % int
}
const brands = ['Cadillac', 'Subaru', 'Porche']
const statuses = ['unopened', 'opened', 'pending', 'closed-solved', 'closed-unnresolved']
export const singleDataJson = () =>(
        {
            brand: brands[random(3)],
            model: 'XS',
            complaint: 'Door key doesn\'t work',
            createdBy: 'admin',
            createdOn: '12/12/2018',
            lastUpdatedDate: '12/30/2018',
            status: statuses[random(5)]
        }
)
export const generateData = (int)=>{
    let data = []
    for(let i = 0; i < int; i++){
        data = [...data, singleDataJson()]
    }
    return data
}