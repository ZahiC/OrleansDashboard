var React = require('react');

var CounterWidget = require('../components/counter-widget.jsx');
var ReminderTable = require('../components/reminder-table.jsx');
var Panel = require('../components/panel.jsx');

module.exports = React.createClass({
    render:function(){
        var showPrevious = this.props.page > 1;
        var showNext = this.props.remindersData.reminders.length == 25;

        return <div>
            <div className="row">
                <div className="col-md-12">
                    <CounterWidget icon="calendar" counter={this.props.remindersData.count} title="Reminders Count" />
                </div>
            </div>
            <Panel title="Reminders" subTitle={`Page ${this.props.page}`}>
              <div>
                <ReminderTable data={this.props.remindersData.reminders}/>
                <div style={{textAlign:"center"}}>
                  {showPrevious ? <a className="btn btn-default bg-purple" href={`#/reminders/${this.props.page - 1}`}><i className="fa fa-arrow-circle-left"></i> Previous</a> : null}
                  <span> </span>
                  {showNext ? <a className="btn btn-default bg-purple" href={`#/reminders/${this.props.page + 1}`}>Next <i className="fa fa-arrow-circle-right"></i></a> : null}
                </div>
              </div>
            </Panel>
        </div>
    }
});
