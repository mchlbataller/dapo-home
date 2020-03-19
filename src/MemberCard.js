import React from 'react';

class MemberCard extends React.Component {
    render() {
        return (
            <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
              <div class="mainflip">
                <div class="frontside">
                  <div class="card">
                    <div class="card-body text-center">
                      <p><img class=" img-fluid" src={this.props.imgsrc} alt="card image" /></p>
                      <h4 class="card-title">{this.props.name}</h4>
                      <p class="card-text">{this.props.role}</p>
                    </div>
                  </div>
                </div>
                <div class="backside">
                  <div class="card">
                    <div class="card-body text-center mt-4">
                      <h4 class="card-title">{this.props.name}</h4>
                      <p class="card-text">{this.props.role}</p>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        )
    }
}

export default MemberCard;