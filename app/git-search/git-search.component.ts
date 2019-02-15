import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../services/git-search.service';
import { GitSearch } from './git-search';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'; 
import { AdvancedModelSearch } from './advanced-model-search';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {

  searchResults:GitSearch;
  searchQuery:string; 
  displayQuery:string;
  title:string;

  constructor(
    private GitSearchService:GitSearchService,
    private route: ActivatedRoute, //ActivatedRoute contains the information about a route associated with a component loaded in an outlet
    private router: Router,
    
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap) => {
      //paramMap provide us the methods get,has,getAll further info angular.io when a data subscribe it
        this.searchQuery = params.get('query'); //so we use the get method
        this.displayQuery = params.get('query'); 
        this.gitSearch();
    });
     
    this.route.data.subscribe( (result) => { //ActivatedRoute.data is an observable which contains the data of route
      this.title = result.title
    })
  }

  gitSearch = () => {
    //the gitSearch() return a promise
    //if this promise is success then store the response,
    //else display the error
    this.GitSearchService.gitSearch(this.searchQuery).then( //we use then on promises like if...else
                                                            //if it is success then execute the first arrow function
      response => { this.searchResults = response; },      //else the second arrow function
      error => { alert("Error: "+ error.statusText) }
    )
  }

  sendQuery = () => {
    this.searchResults = null; //null the search results
    this.router.navigate(['/search/' + this.searchQuery]) //go to the page
  }
}

