export class Sunshower extends React.Component{
    render(){
        return (
            <div className="icon sun-shower">
                <div className="cloud"></div>
                <div className="sun">
                    <div className="rays"></div>
                </div>
                <div className="rain"></div>
            </div>
        );
    }
}

export class Thunder extends React.Component{
    render(){
        return (
            <div className="icon thunder-storm">
            <div className="cloud"></div>
            <div className="lightning">
                <div className="bolt"></div>
                <div className="bolt"></div>
            </div>
            </div>
        );
    }

}

export class Cloudy extends React.Component{
    render(){
        return (
            <div className="icon cloudy">
                <div className="cloud"></div>
                <div className="cloud"></div>
            </div>
        );
    }

}

export class Snowy extends React.Component{
    render(){
        return (
            <div className="icon flurries">
            <div className="cloud"></div>
            <div className="snow">
                <div className="flake"></div>
                <div className="flake"></div>
            </div>
            </div>
        );
    }

}

export class Sunny extends React.Component{
    render(){
        return (
            <div className="icon sunny">
            <div className="sun">
                <div className="rays"></div>
            </div>
            </div>
        );
    }

}

export class Rainy extends React.Component{
    render(){
        return (
            <div className="icon rainy">
            <div className="cloud"></div>
            <div className="rain"></div>
            </div>
        );
    }

}