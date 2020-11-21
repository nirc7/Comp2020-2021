using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class StudentsController : ApiController
    {
        //public IHttpActionResult Get() {
        //    return Json(StudentsMOCK.students);
        //}
        //public List<Student> Get() {
        //    return StudentsMOCK.students;
        //}

        public IHttpActionResult Get()
        {
            try
            {
                return Ok(StudentsMOCK.students);
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
                //return BadRequest(ex.Message);
            }

        }

        public IHttpActionResult Get(int id)
        {
            try
            {
                Student s = StudentsMOCK.students.FirstOrDefault(stu => stu.ID == id);
                if (s == null)
                {
                    return Content(HttpStatusCode.NotFound, $"student with id={id} was not fount for GET!");
                }
                return Ok(s);
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }

        [Route("api/students/name/{na}")]
        public IHttpActionResult Get(string na)
        {
            try
            {
                Student s = StudentsMOCK.students.FirstOrDefault(stu => stu.Name == na);
                if (s == null)
                {
                    return Content(HttpStatusCode.NotFound, $"student with name={na} was not fount for GET!");
                }
                return Ok(s);
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }

        public IHttpActionResult Post([FromBody] Student s)
        {
            try
            {
                StudentsMOCK.students.Add(s);
                return Created(new Uri(Request.RequestUri.AbsoluteUri + s.ID  ), s);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        public IHttpActionResult Post(int id, string name, double avg)
        {
            try
            {
                Student s = new Student(id, name, avg);
                StudentsMOCK.students.Add(s);
                return Created(new Uri(Request.RequestUri.AbsoluteUri + s.ID), s);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        public IHttpActionResult Delete(int id)
        {
            try
            {
                Student s = StudentsMOCK.students.FirstOrDefault(stu=>stu.ID == id);
                if (s != null)
                {
                    StudentsMOCK.students.Remove(s);
                    return Ok();
                }
                else
                {
                    return Content(HttpStatusCode.NotFound, $"student with id={id} was not fount for Delete!");
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }

        public IHttpActionResult Put(int id, [FromBody] Student value) 
        {
            try
            {
                Student s = StudentsMOCK.students.FirstOrDefault(stu => stu.ID == id);
                if (s != null)
                {
                    s.Name = value.Name;
                    s.Avg = value.Avg;
                    return Ok(s);
                }
                else
                {
                    return Content(HttpStatusCode.NotFound, $"student with id={id} was not fount for update!");
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        } 
    }
}
