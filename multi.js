function Multi(){ 
        let x = []
    for (let i = 0; i <= 10; i++) {
        x[i] = []
        for (let j = 0; j <= 10; j++) {
            x[i][j] = i*j
        }
        
    }
    
    console.table(x)
}   

//--------------------------------------------

function MultiN(n,m){ 
    let x = []
for (let i = 0; i <= n; i++) {
    x[i] = []
    for (let j = 0; j <= m; j++) {
        x[i][j] = i*j
    }
    
}

console.table(x)
}   