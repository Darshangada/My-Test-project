import React from 'react'

export default function Navbar


() {
  return (
    <div>
        <nav class="navbar navbar-exapand-lg navbar-light bg-light">
            <div class ="container-fluid">
                <a class="=navbar-brand" href='#'>Title </a>
                <button class=" navbar-toggler" type='button' data-bs-toggler="collapse" data-bs-target="#navbarSuppprted" area-controls="navnarSupportedcontend" aria-expaned="false" aria-label='Toggle navigation'>
                    <span class ='navbar-toggler-icon'></span>

                </button>
                <div class="collapse navbar-collepse" id="navbarSupportedContent">

                    <ul class="navbar-nav me-auto mb-2 mb-lg-O">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href='#'>Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" aria-current="page" href='#'>About</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" aria-current="page" href='#'>Blog</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link " aria-current="page" href='#'>Contact</a>
                        </li>
                        <button>button</button>
                    </ul>
                </div>
            </div>
            
        </nav>
    </div>
  )
}
