
        <template>

       <div>

        <div class="container">

    
           <div>
        <pagin :current="currentPage" @page-changed="getAllPosts" :perPage="total" >
        </pagin>
</div>
        
     
       </div>
         
           

            
        <div class="post" v-for="(post, index) in posts">
       <router-link :to= "{name: 'post', params: {id: index}}" > 
        <div class="posta">  
        <md-layout md-gutter md-row md-flex='100'>
            <div class="top_cont">
            <div class="square"></div> 
            <div class="triangle"></div>
            </div>
        </md-layout>
        
            <div class="main_cont">
        <md-layout md-gutter>
     
        <md-layout md-column md-hide-xsmall >
            <md-layout md-flex="100" >
                <div class="post_img_wrap">
                <img src="http://bellagambaam.weebly.com/uploads/7/2/5/0/72504765/1424977_orig.jpg">
        </div>
        </md-layout>
      </md-layout>

          <md-layout md-column  md-flex="80" >
    

                 <div class="post_cont">
               <md-layout>
                <md-layout md-flex="70">
                 <div class="vacancy_name"><router-link :to= "{name: 'post', params: {id: index}}" > {{post.name }} </router-link></div>
                 </md-layout>
                 
                 <md-layout md-flex-offset="25">
                 <div class="icon_grade">
                <i class="material-icons ">grade</i></div>
                </md-layout>
               </md-layout>
               
               
               <md-layout >
               <div class="discription">
               <p > {{ post.body + "..."}} </p></div>
               </md-layout>
               
               
               <div class="post_bottom">
            <md-layout md-row :md-gutter="30">
                <md-layout md-flex="40">
                <span class="ex first_ex"><i class="material-icons">work</i> {{post.email}}</span></md-layout>
                
                <md-layout md-flex="30">
                <span class="ex first_ex"><i class="material-icons">room</i>{{post.email}}</span></md-layout>
                
                <md-layout md-flex="30" md-align="end">
                
                <div class="ex pro">
                
                <router-link :to= "{name: 'post', params: {id: index}}" ><span class="link"><i class="material-icons">view_headline</i>Подробнее</span ></router-link><div class="square_button"></div></div>
                
                
                </md-layout>
                
            </md-layout>
                </div>
                
            </div>
    
    
    
  </md-layout>
  
</md-layout>
        </div>
         </div>   </router-link></div>
         
    </div>
   
</template>


<script>

    
    
    
    
    
    

import Pagin from './Pagination.vue'   
import Triangle from './triangle.vue'   
import Hello from './Hello.vue'
import Disc from '../view/discription.vue'

export default {
        name: "Main_row",
        props: [],
        data() {
            return {
                posts: [],
                currentPage: 1,
                total: 2
            
            }
        },
        components: {
            Pagin, Hello, Disc, Triangle
        },
        methods: {


            getAllPosts: function(page) {
                var options = {
                    params: {
                        _page: page,
                        _limit: 10
 
                    }
                }
 this.$http.get('https://jsonplaceholder.typicode.com/comments', options).then(function(response) {
                    console.log(response)
                    this.posts = response.data
                    this.currentPage = page
                    this.total = response.body.length
                    
                }, function() {

                })
            },            
             
            
            
            

            
                

        },




        created: function() {
            this.getAllPosts(this.currentPage)
            var postId = this.$route.params.id
            this.post = this.posts[postId]
            
            
          } 
        

    }
    

</script>













<style scoped>

    .container {
        display: block;
        box-sizing: border-box;
         
    }
    
    .post {
        background-color: #FAF8FF;
        max-width: 800px;
        margin: auto;
        margin-bottom: 20px;
        position: relative;
        padding-left: 0px;
        height: 100%;
        overflow: hidden;
        border-radius: 6px;
        clear: both;
        box-shadow: rgba(166, 190, 205, .2) 0px 3px 0px;
        border-left: 0px solid #039BE5;
        z-index: 20;
    
       
           

        
        
    }
    .main_cont {
         box-shadow: rgba(166, 190, 205, .5) 2px 3px 2px;
    }

    
    .post:hover{
    box-shadow: rgba(166, 190, 205, .4) -1px 3px 0px;
        background-color: #ffffff;
    transform: scale(1.003);
        transition: 0.1s
        }      
    
    
    .post:hover .square{
    background-color: #02aafc;
    width: 17%;
    margin-left: -7px;
        left: 2px;
        transition: 0.5s;
        }  
    

    
        .post:hover .top_cont{
           width: 100%;
        transition: 0.7s;
            border-bottom: 3px solid #02aafc;
        }  
    
    .discription > p{
        font-weight: 300;
    }
    
    
        .top_cont {
        border-bottom: 3px solid #028cd1;
        width: 100%;
        height: 20px;
        background: #fff;
        white-space: nowrap;
        display: flex;
        
    }
    
    
    .post-cont {
        background-color: #A6BECD;
        margin: 5px;
        padding: 5px;
        padding-left: 0px;
        position: relative;
        margin-right: 20px;


    }
    
    .post_img_wrap {
       
        position: relative;
        margin-right: 20px;
        display: block;
        padding-left: 0px;
        width: 100%;
    
        
       
    }
    
    
        img {
            box-shadow: rgba(0,0,0,0.4) 5px 5px 4px;
           
            position: absolute;  
            top: 0;  
            bottom: 0;  
            left: 0;  
            right: 0;  
            margin: auto;
 
    }
    .post:hover img {
         max-height: 202px;  
            max-width: 142px; 
        transition: 0.2s;
    }
    

    
    .vacancy_name {
        margin-top: 15px;
        height: 22px;
        display: inline-block;
        font-weight: bold;
        text-transform: capitalize;
        white-space: nowrap;
        overflow: hidden;
        font-size: 13px;
        text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
        -ms-text-overflow: ellipsis;
        font-size: 20px;

    }


    .vacancy_name > a:-webkit-any-link {
      
        text-decoration: none;
         color: black;
        font-weight: 300;
        padding-left: 5px;
    }
    .post:hover p {
        padding-left: 10px;
        transition: 0.4s;
    }

    
    .icon_grade {
        color: #fca401;
     
        
    }

    
    .vacancy_name:hover {
        transition: all .2s ease;
        cursor: pointer;
    }
    
    .discription {
        margin-right: 60px;
        overflow: hidden;
    }
    
    .discription:hover {
        
    }
    
    .icon_grade {
        float: right;
        margin-top: 10px;
    }
    
    .icon_grade>i:hover {
        color: yellow;
    }
    
    .ex {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #a4a7a8;  
        height: 35px;
        padding-top: 5px;
        
       
        
       
        
    }
    
    

    
        .ex:hover {
        color: #F57921;
        transform: scale(1.02);
            
            
    }
    .first_ex:hover i {
        color: #F57921;
        transition: 0.2;
    }
    
    i {
        vertical-align: bottom;
        
    }
    
    .post_bottom {
        margin-bottom: 10px;
        
    }
    
  
    

    
    .md-layout {
        overflow: hidden;
        text-overflow: ellipsis;


        
    }
    

        .a {
        display: inline-block;
        line-height: 23px;
        
           
    }

    
    .pro {

        margin-right: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
        -ms-text-overflow: ellipsis;
  
    }
    
    .ex > i  {
        color: #4677af
    }
    
    
    .link {
        color: white;
        opacity: 0.8;
        vertical-align: middle;
        font-weight: 300;
        margin-bottom: 5px;
        background-color: #039BE5;
        border-radius: 20px;
        padding: 5px 10px;
        
    }
    
    .link:hover i {
        color: white;
    }
    .link > i{
        margin-bottom: -0.5px;
        color: white;
        font-size: 22px;

    }
    
        .pagination {
        margin-bottom: 100px;
        white-space: nowrap;
        display: flex;
    }

    .link:hover  {
        opacity: 1;
        margin-left: 10px;
        transition: 0.1s;
        overflow: hidden;
    }

    
    .pag_button {
        background-color: antiquewhite;
        width: 120px;
        border-radius: 13px;
        padding: 15px;
        margin: auto
    }



    
    .square {
    background: #039BE5;
        
    width: 18%;
    height: 20px;
    }

    .triangle {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 20px 20px 20px;
    border-color: transparent transparent #039BE5;
    margin-left: -20px;

    }
    
    discription > p {
        color: black;
            text-decoration: none !important; 
            border-bottom: none;
        
            
    }    
    
      discription > p:hover {
        text-decoration: none !important;
          border-bottom: none;
        
            
            
    }
    span {
       color: black 
    }

 
    
    a:-webkit-any-link   {
    color: black;
    cursor: auto;
    text-decoration: none !important; 
    text-decoration-line: none;
    text-decoration-style: initial;
    text-decoration-color: initial;

    
    }    

    
    .link:active {
       padding: 6px 11px;
        transition: 0.06;
    }
    
    .post_cont:active {
        padding: 1.5px;
        transition: 0.05;

        
    }

    
</style>
