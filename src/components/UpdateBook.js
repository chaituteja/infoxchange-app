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
                        <div className="form-group">
                          <input type="text" class="form-control" placeholder="title" name="title" value={bookData.title} onChange={handleChange}></input>
                        </div>
                        <div className="form-group">
                          <input type="text" class="form-control" placeholder="author" name="author" value={bookData.author} onChange={handleChange}></input>
                        </div>
                        <div className="form-group">
                          <input type="text" class="form-control" placeholder="ISBN" name="isbn" value={bookData.isbn} onChange={handleChange}></input>
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