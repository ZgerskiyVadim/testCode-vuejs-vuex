<template>

<div>
    <div class="pagination">
        <div class="pagination_left pag">
            <a href="#" v-if="hasPrev()" @click="changePage(prevPage)">
                <i class="material-icons">navigate_before</i>
            </a>
        </div>
 
       
       
    <div class="pagination_midl">
        <div class="pagination_mid">

        <ul> 
            <li v-if="hasFirst()" @click="changePage(1)" >
                <a href="#" class="wrap_a">1</a>
            </li>
            
            <li class="dots" @click="changePage(1)" v-if='hasFirst()'>
                <a class="transition" href="#" v-if='hasFirst(1)'>...</a>
            </li> 

            <li v-if="hasFirst()" ></li>
            <li class = "pagin_mid" v-for="page in pages">
                <a href="#" class="wrap_a" :class="{pot: current == page}">
                    <a href="#" @click="changePage(page)" >{{page}}</a>
                </a>
            </li>
            
            <li v-if="hasLast()" >
                <a href="#" @click="changePage(total)" style='display: none'>   
                </a>
            </li>  
            
            <li  class="dots" v-if="hasLast()">
                <a href="#"  class="transition " @click="changePage(total)">...</a>
            </li> 
            
            <li v-if="hasLast()">
            <a href="#"  @click="changePage(total)">
                <a class='wrap_a'>{{total}}</a>
            </a>
            </li>
        </ul>
        </div>
    </div>
          
    <div class="pagination_right pag" v-if="hasNext()">
        <a href="#"  @click="changePage(nextPage)" >
            <i class="material-icons">navigate_next</i>
        </a>
    </div>
        <div v-else>
            <div class="transition_nav"></div>
        </div>
    </div>
</div>
   
</template>


<script>
export default {
    name: "pagination",
    data: function() {
        return {
            
        }
    },
    computed: {
        current() {
           return this.$store.state.currentPage
         },
        pageRanger() {
            return this.$store.state.pageRanger
        },
        pageRange() {
            return this.$store.state.pageRange
        },
        total() {
            return this.$store.state.totalPage
        },
        perPage() {
            return this.$store.state.perPage
        },

        pages: function() {
            var pages = []
            for(var i = this.rangeStart; i <= this.rangeEnd; i++) {
                pages.push(i)
            }
            return pages
        },
        
        rangeStart: function() {
          var start = this.current - this.pageRange
          return (start > 0 ) 
              ? start : 1 
        },
            
        rangeEnd: function() {
            var end = this.current + 3

            return (end < this.total) ? end : this.total
        },
        
        nextPage: function() {
        return this.current + 1
        },
        
        prevPage: function() {
        return this.current - 1
        }
            
    },
    
      
    methods: {
        
        hasFirst: function() {
            return this.rangeStart !== 1
        },        
        hasLast: function() {
            return this.rangeEnd < this.total
        },
        
        hasPrev: function() {
            return this.current > 1
        },
        hasNext: function() {
            return this.current < this.total
        },
        
        changePage(page) {
            this.$store.dispatch('allPosts', page)
        }
         
    }

  
}
</script>




<style scoped>

    * { 
    -moz-box-sizing: border-box; 
    -webkit-box-sizing: border-box; 
     box-sizing: border-box; 
}
    

    .pagination {
        margin-top: 15px;
        margin-bottom: 15px;
        height: 100%;
        width: 100%;
        display: flex;
        flex-flow: nowrap;
        justify-content: center;

    }
    
    .pagination_mid {
        flex-flow: nowrap;
        justify-content: center;
        display: flex;
        margin-left: auto;    
        width: 100%
        

    }
    
    .pagination_midl {
        flex-flow: nowrap;
        justify-content: center;
        display: flex;
        margin-left: auto;
        margin-right: auto;
        width: 85%
            
    }
    

    .pagination_left {
        float: left;
        padding-left: 200px;
    
    }
    .pagination_right {
        float: right;
        justify-content: flex-end;
        padding-right: 200px;
        

    }
    
    .pag > a {
        text-decoration: none;
        border-radius: 14px;
        padding: 8px 10px;
        background-color: #039BE5;
        display: block;
        text-align: center;
        margin-bottom: 20px;
        color: white;

    }
    
    .pag > a > i {
        padding-top: 3px;
    }

    .transition_nav {
        margin-left: 200px;
    }
    .pag {
        
        padding-bottom: 0px;
        opacity: 0.80;

    }
    .pag:hover {
        opacity: 1;
    }


    .wrap_a>a:hover {
        text-decoration: none; 
    }
    .wrap_a:hover {
        box-shadow: inset rgba(0,0,0,.1) 0 0 1px;
        background-color: #FAF8FF;
        
    }
    
    .wrap_a:active {
        box-shadow: inset rgba(0,0,0,.6) 0 0 2px;
         
    } 
    
    .wrap_a {
        display: block;
        width: 40px;
        height: 40px;
        border: 1px solid #D3D1D8;
        opacity: 1;
        padding: 3px;
        padding-top: 5px;
        border-radius: 7px;
        box-shadow: inset rgba(0,0,0,.1) 0 0 2px;
        text-decoration: none !important;
        opacity: 1;
    }
    a:hover {
        text-decoration: none !important;
    }
    
    .pot {
        border-color: #02AAFC;
    }
    
    .dots {
        line-height: 25px;
        vertical-align: bottom;
    }
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        }
    
    .transition{
        border: none;
        box-shadow: none;
        opacity: 1;
        padding: 0px;
        display: inline-block;
    }
    
    .transition:hover{
        border: none;
        box-shadow: none;
        background-color: #fff;
        color: none;
        opacity: 1
        
    }


    
</style>