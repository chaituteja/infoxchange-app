import React from 'react';

const CreateBook = (props) => {
    return (
        <div className="container">
            <button type="button" className="btn btn-success float-right create-book" data-toggle="modal" data-target="#myModal" >Add New Book</button>
            <div className="modal fade" id="myModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <span className="modal-title" id="exampleModalLabel">
                                <b>Add New Book</b>
                            </span>
                            <button type="button" className="close close-x" data-dismiss="modal">
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form id="create-book-form">
                                <div className="form-group row">
                                <label className='form-label col-sm-2 col-form-label'>Title</label>
                                <div className='col-sm-10'>
                                    <input type="text" className="form-control" placeholder="Book Title" name="title" defaultValue="" onChange={props.handleChange} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className='form-label col-sm-2 col-form-label'>Author</label>
                                    <div className='col-sm-10'>
                                    <input type="text" className="form-control" placeholder="Author Name" name="author" defaultValue="" onChange={props.handleChange} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className='form-label col-sm-2 col-form-label'>ISBN</label>
                                    <div className='col-sm-10'>
                                    <input type="text" className="form-control" placeholder="Book ISBN" name="isbn"  defaultValue="" onChange={props.handleChange} />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary close-button" data-dismiss="modal" >Close </button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={props.createBook}>Create</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CreateBook;