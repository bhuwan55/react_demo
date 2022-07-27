import React,{Component} from 'react';
import './Nav.css';


export class Navigation extends Component{
    render(){
        return(
            <div class="header">
            <nav>
                <ul>
                    <img src="/chat_icon.ico"/>
                    <a href="#">Chat APP</a>
                </ul>
            </nav>
        </div>
        )
    }
}