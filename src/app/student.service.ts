import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ObservedValueOf, Observable } from 'rxjs';
import { Student } from './student';




@Injectable({
    providedIn: 'root'

})

export class studentService {

    baseUrl = 'http://localhost:8000/students';
    constructor(private http: HttpClient) { }

    getStudentList():Observable<any>{
        return this.http.get(this.baseUrl);
    }

    getStudent(id):Observable<any>{
        return this.http.get(this.baseUrl+'/'+id);
    }

    createStudent(student:Student):Observable<any>{
        return this.http.post(this.baseUrl,student);
    }

    updateStudent(id:number, student:Student):Observable<any>{
        return this.http.put(this.baseUrl+'/'+id,student);
    }

    deleteStudent(id:number):Observable<any>{
        return this.http.delete(this.baseUrl+'/'+id);
    }
    

}