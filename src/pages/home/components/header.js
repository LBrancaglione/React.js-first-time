import React from 'react';

function Header(){
 return(
            <header className = 'header'>
                {/*Esquerda*/} 
                <div className ='toolbar'>
                    <span>Primeiro Aplicativo</span>
                {/*Direita*/}
                <div className = ''>
                    <button>Novo Post</button>
                    <span>Img01</span>
                    <span>img02</span>
                </div>
            </div>
            </header>
        )
}

export default Header;