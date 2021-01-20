import React from 'react'

const UpdateBook = ({bookData, updateBook, handleChange, getBook, elementId}) => {
    const modalIdentifier = 'update'+elementId;
    const dataTarget = '#'+modalIdentifier;

    return (
        <span>
            <button type="button" className="btn btn-info" data-toggle="modal" data-target={dataTarget}
                onClick={(e)=>getBook(e,elementId)}>Update</button>
            <div className="modal fade" id={modalIdentifier} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <span className="modal-title" id="exampleModalLabel"><b>Update Book</b></span>
                    <button type="button" className="close close-x" data-dismiss="modal">
                      <span>&times;</span>
                    </button>
                  </div>
                <div className="modal-body">
                  <form id="update-book-form">
                        <div className="form-group row">
                          <label className='form-label col-sm-2 col-form-label'>Title</label>
                          <div className='col-sm-10'>
                            <input type="text" className="form-control" placeholder="Book Title" name="title" value={bookData.title} onChange={handleChange}></input>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className='form-label col-sm-2 col-form-label'>Author</label>
                          <div className='col-sm-10'>
                            <input type="text" className="form-control" placeholder="Author name" name="author" value={bookData.author} onChange={handleChange}></input>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className='form-label col-sm-2 col-form-label'>ISBN</label>
                          <div className='col-sm-10'>
                            <input type="text" className="form-control" placeholder="Book ISBN" name="isbn" value={bookData.isbn} onChange={handleChange}></input>
                          </div>
                        </div>
                  </form>
                </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary close-button" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={(event)=>updateBook(event,elementId)}>Update</button>
                  </div>
                </div>
              </div>
            </div>

        </span>
    )
}

export default UpdateBook;