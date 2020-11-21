using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Student
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public double Avg { get; set; }

        public Student() { }
        public Student(int i, string n, double a) { ID = i; Name = n; Avg = a; }
    }

    static public class StudentsMOCK
    {
        static public List<Student> students = new List<Student>()
        {
            new Student(1,"avi",    100),
            new Student(3,"ben",    90),
            new Student(2,"charlie",95 ),
            new Student(4,"dora",   97) ,
        };
    }
}