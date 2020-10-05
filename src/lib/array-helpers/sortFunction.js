export const sortFunction = (a, b) => 
    (a.keyword < b.keyword) ? 
    -1 :
    (a.keyword > b.keyword) ? 
    1 : 0
    