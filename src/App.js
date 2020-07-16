import React, { Component } from 'react'
import { v4 } from 'uuid'
import CapitalizeKeywordList from './components/CapitalizeKeywordList'
import BroadKeywordList from './components/BroadKeywordList'
import AddCapitalizeKeywordForm from './components/AddCapitalizeKeywordForm'
import AddBroadKeywordForm from './components/AddBroadKeywordForm'
import AddEomForm from './components/AddEomForm'
import EOMList from './components/EOMList'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keywords: [],
      broadKeywords: [],
      eoms: []
    }
    this.addKeyword = this.addKeyword.bind(this)
    this.addBroadKeyword = this.addBroadKeyword.bind(this)
    this.removeKeyword = this.removeKeyword.bind(this)
    this.removeBoroadKeyword = this.removeBroadKeyword.bind(this)
    this.addEOM = this.addEOM.bind(this)
    this.removeEOM = this.removeEOM.bind(this)
  }
  
  addEOM(grantSpend, grantPercentage, adImpressions, impressionPercentage, adClicks, adClickPercentage, clickThroughRate, conversions, conversionPercentage, topKeyword, topKeywordClicks, secondKeyword, secondKeywordClicks, thirdKeyword, thirdKeywordClicks, fourthKeyword, topHeadline, topDescription, topAdClicks) {
    const eoms = [
      ...this.state.eoms,
      {
        id: v4(),
        grantSpend,
        grantPercentage,
        adImpressions,
        impressionPercentage,
        adClicks,
        adClickPercentage,
        clickThroughRate,
        conversions,
        conversionPercentage,
        topKeyword,
        topKeywordClicks, 
        secondKeyword,
        secondKeywordClicks,
        thirdKeyword,
        thirdKeywordClicks,
        fourthKeyword,
        topHeadline,
        topDescription,
        topAdClicks
      }
    ]
    this.setState({eoms})
  }

  addKeyword(keyword) {
    const keywords = [
      ...this.state.keywords,
      {
        id: v4(),
        keyword,
      }
    ]
    this.setState({keywords})
  }

  addBroadKeyword(broadKeyword) {
    const broadKeywords = [
      ...this.state.broadKeywords,
      {
        id: v4(),
        broadKeyword,
      }
    ]
    this.setState({broadKeywords})
  }

  removeKeyword(id) {
    const keywords = this.state.keywords.filter(
        keyword => keyword.id !== id
    )
    this.setState({keywords})
  }

  removeBroadKeyword(id) {
    const broadKeywords = this.state.broadKeywords.filter(
        keyword => keyword.id !== id
    )
    this.setState({broadKeywords})
  }

  removeEOM(id) {
    const eoms = this.state.eoms.filter(
      eom => eom.id !== id
    )
    this.setState({eoms})
  }

  render() {
    const { addKeyword, addBroadKeyword, removeKeyword, removeBoroadKeyword, addEOM, removeEOM } = this;
    const { keywords, broadKeywords, eoms } = this.state;
    return (
      <div className="thirtyWidth">
      <AddEomForm onNewEom={addEOM}/>
      <EOMList eoms={eoms}
                onRemove={removeEOM}/>
      <h2>Capitalize Keyword</h2>
      <AddCapitalizeKeywordForm onNewKeyword={addKeyword} />
      <CapitalizeKeywordList keywords={keywords}
                  onRemove={removeKeyword}
                    />
      <h2>Broad Match Modifier</h2>
      <AddBroadKeywordForm onNewBroadKeyword={addBroadKeyword} />
      <BroadKeywordList broadKeywords={broadKeywords}
                  onRemove={removeBoroadKeyword}
                    />
    </div>
    )
  }
}

export default App;
