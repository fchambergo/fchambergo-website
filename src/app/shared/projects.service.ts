import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projects } from './projects.model';

@Injectable({ providedIn: 'root' })
export class ProjectsService {

    constructor(public http: HttpClient) {

    }

    baseURL: string = "assets/projects.json";

    getProjects(): Observable<Projects[]> {
        return this.http.get<Projects[]>(this.baseURL);
    }
}