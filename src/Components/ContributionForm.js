import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import PropTypes from "prop-types";
import SimpleDocRest from "../api/SimpleDocRest";
import ListSubheader from '@material-ui/core/ListSubheader';
import TextComponent from "./textComponent.js"

class ContributionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      list108: [],
      list148: [],
      conceptname: '',
      documentname: '',
      definition: '',
      description: '',
      contributorName: '',
      contributorUtorid: '',
      contributorStdNum: '',
      contributorEmail: '',
      exampleDescription1: '',
      example1: '',
      exampleDescription2: '',
      example2: '',
      exampleDescription3: '',
      example3: '',
    }
  }

  componentDidMount() {
    SimpleDocRest.get(`concepts/`)
      .then((result) => {
        this.setState(() => {
          return {
            data: result.data
          };
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleOnConceptChange = (event) => {
    this.setState({ conceptname: event.target.value });
  };

  handleOnDocNameChange = (event) => {
    this.setState({ documentname: event.target.value });
  };

  handleOnDefChange(event) {
    this.setState({ definition: event.target.value });
  };

  handleOnDescriptionChange = (event) => {
    this.setState({ description: event.target.value });
  };

  handleOnContributorNameChange = (event) => {
    this.setState({ contributorName: event.target.value });
  };

  handleOnContributorUtoridChange = (event) => {
    this.setState({ contributorUtorid: event.target.value });
  };

  handleOnContributorStdNumChange = (event) => {
    this.setState({ contributorStdNum: event.target.value });
  };

  handleOnContributorEmailChange = (event) => {
    this.setState({ contributorEmail: event.target.value });
  };

  handleOnExDescription1 = (event) => {
    this.setState({ exampleDescription1: event.target.value });
  };

  handleOnEx1 = (event) => {
    this.setState({ example1: event.target.value });
  };

  handleOnExDescription2 = (event) => {
    this.setState({ exampleDescription2: event.target.value });
  };

  handleOnEx2 = (event) => {
    this.setState({ example2: event.target.value });
  };

  handleOnExDescription3 = (event) => {
    this.setState({ exampleDescription3: event.target.value });
  };

  handleOnEx3 = (event) => {
    this.setState({ example3: event.target.value });
  };

  handleOnSubmit(event) {
    event.preventDefault();

    SimpleDocRest.post(`/documents/contribution/`, {
      conceptname: this.state.conceptname,
      documentname: this.state.documentname,
      definition: this.state.definition,
      description: this.state.description,
      contributorName: this.state.contributorName,
      contributorUtorid: this.state.contributorUtorid,
      contributorStdNum: this.state.contributorStdNum,
      contributorEmail: this.state.contributorEmail,
      exampleDescription1: this.state.exampleDescription1,
      exampleDescription2: this.state.exampleDescription2,
      exampleDescription3: this.state.exampleDescription3,
      example1: this.state.example1,
      example2: this.state.example2,
      example3: this.state.example3
    })
      .then(function (response) {
        console.log(response);
        alert("Thank you! you're submission has been sent.")
      }).then(function (error) {
        console.log(error);
      });
  };

  render() {
    // console.log(this.state.data)
    this.state.list108 = []
    this.state.list148 = []
    for (const concept of this.state.data) {
      if (concept.category == "CSC108") {
        this.state.list108.push(concept)
      } else {
        this.state.list148.push(concept)
      }
    }
    return (
      // , marginInlineStart: "33.5ch"  , marginInlineStart: "50ch" ,width: 80ch
      <center>
        <div>
          <form noValidate autoComplete="off" onSubmit={this.handleOnSubmit.bind(this)} >
            <div>
              <h1>Contribute to our documentation!</h1>
              <TextComponent text="INSTRUCTIONS: After filling our your personal info, select a concept and think of a topic relevant to the concept. For example, Linked lists could be the selected concept and the topic could be linked list insertion. Add the name of your topic into the 'Title' field. After that, list all definitions relevant to the topic and then add an explanation of your topic tailored to first year students. Finally, add three examples consisting of code and relevant descriptions. By submitting, you are giving us permission to edit and publish the documentation to the site in case of acceptance however, you retain full intellectual property rights to your submission. *- indicates the field is REQUIRED" />
            </div>
            <h2 style={{ marginTop: "30px" }}>
              Personal Information
                    </h2>
            <div>
              <TextField //name
                style={{ width: "40ch", marginTop: "5px" }}
                id="name"
                required
                label="Name"
                multiline
                value={this.state.contributorName}
                onChange={this.handleOnContributorNameChange.bind(this)}
                //placeholder="Enter your name"
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" >
                      <AccountCircle style={{ marginBottom: "14px" }} />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div>
              <TextField //Utorid
                style={{ width: "40ch", marginTop: "20px" }}
                id="filled-multiline-static"
                required
                label="Utorid"
                multiline
                value={this.state.contributorUtorid}
                onChange={this.handleOnContributorUtoridChange.bind(this)}
                //placeholder="Enter your Utorid"
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" >
                      <AccountCircle style={{ marginBottom: "14px" }} />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div>
              <TextField
                style={{ width: "40ch", marginTop: "20px" }}
                id="filled-multiline-static"
                required
                label="Student Number"
                multiline
                value={this.state.contributorStdNum}
                onChange={this.handleOnContributorStdNumChange.bind(this)}
                //placeholder="Enter your student number"
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" >
                      <AccountCircle style={{ marginBottom: "14px" }} />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div>
              <TextField
                style={{ width: "40ch", marginTop: "20px" }}
                id="filled-multiline-static"
                required
                label="Utoronto Email"
                multiline
                value={this.state.contributorEmail}
                onChange={this.handleOnContributorEmailChange.bind(this)}
                //placeholder="Enter your email (UofT email preferred)"
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" >
                      <AccountCircle style={{ marginBottom: "14px" }} />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <h2 style={{ marginTop: "40px" }}>
              Document Information
                  </h2>
            <div>
              <TextField
                style={{ width: "40ch" }}
                id="filled-multiline-static"
                required
                label="Concept Name"
                select
                onChange={this.handleOnConceptChange.bind(this)}
                value={this.state.conceptname}

                helperText="Please select one concept"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <ListSubheader>CSC108</ListSubheader>
                {this.state.list108.map((concept) => (
                  <MenuItem key={concept.name} value={concept.name}>
                    {concept.name}
                  </MenuItem>

                ))}
                <ListSubheader>CSC148</ListSubheader>
                {this.state.list148.map((concept) => (
                  <MenuItem key={concept.name} value={concept.name}>
                    {concept.name}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div>
              <TextField
                style={{ width: "40ch", marginTop: "20px" }}
                //id="filled-multiline-static"
                required
                label="Documentation Name"
                multiline
                value={this.state.documentname}
                onChange={this.handleOnDocNameChange.bind(this)}
                placeholder="Enter the Documentation Name"
                variant="filled"
              />
            </div>
            <div>
              <TextField
                style={{ width: "40ch", marginTop: "20px" }}
                id="filled-multiline-static"
                required
                label="Definitions"
                multiline
                value={this.state.definition}
                onChange={this.handleOnDefChange.bind(this)}
                rows={6}
                placeholder="e.g. A linked list consists of nodes that..."
                helperText="Define the main components of the concept."
                variant="filled"
              />
            </div>
            <div>
              <TextField
                style={{ width: "40ch", marginTop: "20px" }}
                id="filled-multiline-static"
                required
                label="Description"
                multiline
                value={this.state.description}
                onChange={this.handleOnDescriptionChange.bind(this)}
                rows={6}
                placeholder="e.g. You can insert into a linked list by..."
                helperText="Explain the topic in a way that can be easily comprehended by first-year students."
                variant="filled"
              />
            </div>
            <h2 style={{ marginTop: "40px" }}>
              Example 1
                  </h2>
            <div>
              <TextField
                style={{ width: "40ch", marginTop: "5px" }}
                id="filled-multiline-static"
                required
                label="Description"
                multiline
                value={this.state.exampleDescription1}
                onChange={this.handleOnExDescription1.bind(this)}
                rows={4}
                placeholder="e.g. Let n be the first node in the linked list..."
                helperText="Give an example of how to approach a problem."
                variant="filled"
              />
            </div>
            <div>
              <TextField
                style={{ width: "40ch", marginTop: "20px" }}
                id="filled-multiline-static"
                required
                label="Code Example"
                multiline
                value={this.state.example1}
                onChange={this.handleOnEx1.bind(this)}
                rows={6}
                placeholder="This is where any code required for your example would go"
                helperText="Enter any code snippets here"
                variant="filled"
              />
            </div>
            <h2 style={{ marginTop: "40px" }}>
              Example 2
                  </h2>
            <div>
              <TextField
                style={{ width: "40ch", marginTop: "40px" }}
                id="filled-multiline-static"
                required
                label="Description"
                multiline
                value={this.state.exampleDescription2}
                onChange={this.handleOnExDescription2.bind(this)}
                rows={4}
                placeholder="e.g. Let n be the first node in the linked list..."
                helperText="Give an example of how to approach a problem."
                variant="filled"
              />
            </div>
            <div>
              <TextField
                style={{ width: "40ch", marginTop: "20px" }}
                id="filled-multiline-static"
                required
                label="Code Example"
                multiline
                value={this.state.example2}
                onChange={this.handleOnEx2.bind(this)}
                rows={6}
                placeholder="This is where any code required for your example would go"
                helperText="Enter any code snippets here"
                variant="filled"
              />
            </div>
            <h2 style={{ marginTop: "40px" }}>
              Example 3
                  </h2>
            <div>
              <TextField
                style={{ width: "40ch", marginTop: "40px" }}
                id="filled-multiline-static"
                label="Description *"
                multiline
                value={this.state.exampleDescription3}
                onChange={this.handleOnExDescription3.bind(this)}
                rows={4}
                placeholder="e.g. Let n be the first node in the linked list..."
                helperText="Give an example of how to approach a problem."
                variant="filled"
              />
            </div>
            <div>
              <TextField
                style={{ width: "40ch", marginTop: "20px" }}
                id="filled-multiline-static"
                label="Code Example *"
                multiline
                value={this.state.example3}
                onChange={this.handleOnEx3.bind(this)}
                rows={6}
                placeholder="This is where any code required for your example would go"
                helperText="Enter any code snippets here"
                variant="filled"
              />
            </div>

            <Button style={{ marginTop: "30px", marginLeft: "3ch" }} variant="contained" color="primary" type="submit" >Submit</Button>
          </form>
        </div >
      </center>
    );
  }

}


ContributionForm.propTypes = {

  conceptname: PropTypes.string,
  documentname: PropTypes.string,
  definition: PropTypes.string,
  description: PropTypes.string,
  contributorName: PropTypes.string,
  contributorUtorid: PropTypes.string,
  contributorStdNum: PropTypes.string,
  contributorEmail: PropTypes.string,
  exampleDescription1: PropTypes.string,
  example1: PropTypes.string,
  exampleDescription2: PropTypes.string,
  example2: PropTypes.string,
  exampleDescription3: PropTypes.string,
  example3: PropTypes.string,
};

export default ContributionForm
