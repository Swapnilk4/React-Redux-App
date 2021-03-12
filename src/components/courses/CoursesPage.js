import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/CourseActions';
import * as authorActions from '../../redux/actions/authorsActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';

class CoursesPage extends Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     course: {
        //         title: ""
        //     }
        // }
    }

    componentDidMount() {
        if (this.props.courses.length === 0) {

            this.props.actions.loadCourses().catch(error => {
                alert("Loading courses failed", error);
            })
        }
        if (this.props.authors.length === 0) {
            this.props.actions.loadAuthors().catch(error => {
                alert("Loading authors failed", error);
            })
        }
    }

    // handleChange = (event) => {

    //     const course = { ...this.state.course, title: event.target.value };
    //     this.setState({ course });
    //     console.log(course);
    // }

    // handleSubmit = (event) => {
    //     event.preventDefault();

    //     this.props.actions.createCourse(this.state.course);
    //     //alert("Yeah !!! Saving " + this.state.course.title);
    // }


    render() {
        return (
            <>

                <h2> Courses </h2>
                <CourseList courses={this.props.courses} />
            </>


            //     <form onSubmit={this.handleSubmit}>
            //     <div className="card" style={{ width: "30%", padding: "20px" }}>
            //         <h2> Courses </h2>
            //         <h3> Add Course </h3>
            //         <input className="m-2" type="text" value={this.state.course.title} onChange={this.handleChange} />

            //         <button type="submit" className="btn btn-primary btn-sm m-2">Save</button>
            //         <ul>
            //             {
            //                 this.props.courses.map(course => (
            //                     <li key={course.title}> {course.title} </li>
            //                 ))
            //             }</ul>
            //     </div>
            // </form>

        );
    }
}

CoursesPage.propTypes = {
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        courses:
            state.authors.length === 0 ? [] :
                state.courses.map(course => {
                    return {
                        ...course,
                        authorName: state.authors.find(a => a.id === course.authorId).name
                    };
                }),
        authors: state.authors

    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
            loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
