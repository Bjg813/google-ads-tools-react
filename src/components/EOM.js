import React, { Component } from 'react'
import { calendar } from './Calendar'

class EOM extends Component {
    constructor(props) {
        super(props)
        // Create refs (references to the input elements)
        this.grantSpend = React.createRef();
        this.grantSpendPercentage = React.createRef();
        this.impressions = React.createRef();
        this.impressionPercentage = React.createRef();
        this.adClicks = React.createRef();
        this.adClickPercentage = React.createRef();
        this.clickThroughRate = React.createRef();
        this.conversions = React.createRef();
        this.conversionPercentage = React.createRef();
        this.topKeyword = React.createRef();
        this.topKeywordClicks = React.createRef();
        this.secondKeyword = React.createRef();
        this.secondKeywordClicks = React.createRef();
        this.thirdKeyword = React.createRef();
        this.thirdKeywordClicks = React.createRef();
        this.fourthKeyword = React.createRef();
        this.fourthKeywordClicks = React.createRef();
        this.topHeadline = React.createRef();
        this.topDescription = React.createRef();
        this.topAdClicks = React.createRef();
        // Bind "this" to the event handler so it doesn't reload the ref's twice
        this.handleSubmit = this.handleSubmit.bind(this);
        // Model
        this.state = {
            grantSpend: '',
            grantSpendPercentage: '',
            impressions: '',
            impressionPercentage: '',
            adClicks: '',
            adClickPercentage: '',
            clickThroughRate: '',
            conversions: '',
            conversionPercentage: '',
            topKeyword: '',
            topKeywordClicks: '',
            secondKeyword: '',
            secondKeywordClicks: '',
            thirdKeyword: '',
            thirdKeywordClicks: '',
            fourthKeyword: '',
            fourthKeywordClicks: '',
            topHeadline: '',
            topDescription: '',
            topAdClicks: ''
        }
    }

// Controller
handleSubmit = e => {
    e.preventDefault();
    this.setState({ grantSpend: this.grantSpend.current.value });
    this.setState({ grantSpendPercentage: this.grantSpendPercentage.current.value });
    this.setState({ impressions: this.impressions.current.value });
    this.setState({ impressionPercentage: this.impressionPercentage.current.value });
    this.setState({ adClicks: this.adClicks.current.value });
    this.setState({ adClickPercentage: this.adClickPercentage.current.value });
    this.setState({ clickThroughRate: this.clickThroughRate.current.value });
    this.setState({ conversions: this.conversions.current.value });
    this.setState({ conversionPercentage: this.conversionPercentage.current.value });
    this.setState({ topKeyword: this.topKeyword.current.value });
    this.setState({ topKeywordClicks: this.topKeywordClicks.current.value });
    this.setState({ secondKeyword: this.secondKeyword.current.value });
    this.setState({ secondKeywordClicks: this.secondKeywordClicks.current.value });
    this.setState({ thirdKeyword: this.thirdKeyword.current.value });
    this.setState({ thirdKeywordClicks: this.thirdKeywordClicks.current.value });
    this.setState({ fourthKeyword: this.fourthKeyword.current.value });
    this.setState({ fourthKeywordClicks: this.fourthKeywordClicks.current.value });
    this.setState({ topHeadline: this.topHeadline.current.value });
    this.setState({ topDescription: this.topDescription.current.value });
    this.setState({ topAdClicks: this.topAdClicks.current.value });
};

// View
render() {
    const { grantSpend, grantSpendPercentage, impressions, impressionPercentage, adClicks, adClickPercentage, clickThroughRate, conversions, conversionPercentage, topKeyword, topKeywordClicks, secondKeyword, secondKeywordClicks, thirdKeyword, thirdKeywordClicks, fourthKeyword, fourthKeywordClicks, topHeadline, topDescription, topAdClicks } = this.state
    return (    
        <div>
        <form className="flex flexColumn" onSubmit={this.handleSubmit}>
            <input type="text" ref={this.grantSpend} placeholder="Grant Spend"/>
            <input type="text" ref={this.grantSpendPercentage} placeholder="Grant Spend Up/Dn %" />
            <input type="text" ref={this.impressions} placeholder="Impressions" />
            <input type="text" ref={this.impressionPercentage} placeholder="Impression Up/Dn %" />
            <input type="text" ref={this.adClicks} placeholder="Ad Clicks" />
            <input type="text" ref={this.adClickPercentage} placeholder="Ad Click Up/Dn %" />
            <input type="text" ref={this.clickThroughRate} placeholder="CTR" />
            <input type="text" ref={this.conversions} placeholder="Conversions" />
            <input type="text" ref={this.conversionPercentage} placeholder="Conversion Up/Dn %" />
            <input type="text" ref={this.topKeyword} placeholder="Top Keyword" />
            <input type="text" ref={this.topKeywordClicks} placeholder="Top Keyword Clicks" />
            <input type="text" ref={this.secondKeyword} placeholder="2nd Keyword" />
            <input type="text" ref={this.secondKeywordClicks} placeholder="2nd Keyword Clicks" />
            <input type="text" ref={this.thirdKeyword} placeholder="3rd Keyword" />
            <input type="text" ref={this.thirdKeywordClicks} placeholder="3rd Keyword Clicks" />
            <input type="text" ref={this.fourthKeyword} placeholder="4th Keyword" />
            <input type="text" ref={this.fourthKeywordClicks} placeholder="4th Keyword" />
            <input type="text" ref={this.topHeadline} placeholder="Top Ad Headline" />
            <input type="text" ref={this.topDescription} placeholder="Top Ad Description" />
            <input type="text" ref={this.topAdClicks} placeholder="Top Ad Clicks" />
            <button>Submit</button>
        </form>

        <h2>Google Ads Performance</h2>
            <p>Your ads were clicked on {adClicks} times, {adClickPercentage}%</p>
            <p>Your ads were shown {impressions} times, {impressionPercentage}%</p>
            <p>Your average click-through rate was {clickThroughRate}%</p>
            <p>Your ads generated {conversions} conversions, {conversionPercentage}%</p>

        <h2>Top Performing Keywords</h2>
            <p>{topKeyword} - {topKeywordClicks} clicks</p>
            <p>{secondKeyword} - {secondKeywordClicks} clicks</p>
            <p>{thirdKeyword} - {thirdKeywordClicks} clicks</p>
            <p>{fourthKeyword} - {fourthKeywordClicks} clicks</p>

        <h2>Your Top Ad Was:</h2>
            <p><strong>{topHeadline}</strong></p>
            <p>{topDescription}</p>
            <p>Your top ad had: {topAdClicks} clicks</p>

        {/* EOM Message */}
            <p>Your Google Ad Grants account spent ${grantSpend} in grant money, {grantSpendPercentage}% from last month. In {calendar.todaysMonth(calendar.getTodaysOneMonthBefore())} your account had {impressions} impressions, {impressionPercentage}% and we recorded {adClicks} ad clicks, {adClickPercentage}%. We recorded {conversions} new conversions {conversionPercentage}%. Your top keyword was "{topKeyword}" with {topKeywordClicks} clicks. Your top search ad was "{topHeadline}" with {topAdClicks} clicks. We will keep monitoring your account. Let us know if you have any questions or concerns.</p>
        </div>
        );
    }
}

export default EOM