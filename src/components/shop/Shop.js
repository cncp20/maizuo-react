import React,{Component} from "react";
import ShopItem from "./ShopItem";

class Shop extends Component {
    constructor() {
		super();
		this.state = {
			shopData:[],
			shopPg:1,
            category:[
                        {name:"3D眼镜", img:"/icon/icon1.png"},
                        {name:"充电装备", img:"/icon/icon2.png"},
                        {name:"手机配件", img:"/icon/icon3.png"},
                        {name:"居家百货", img:"/icon/icon4.png"},
                        {name:"数据线", img:"/icon/icon5.png"},
                        {name:"服饰箱包", img:"/icon/icon6.png"},
                        {name:"模型玩具", img:"/icon/icon7.png"},
                        {name:"车载用品", img:"/icon/icon8.png"},
                    ]
		}
		this.getData = this.getData.bind(this);
		this.sc = this.sc.bind(this);
	}
	componentDidMount() {
		this.getData(this.state.shopPg);
	}
	getData(pg) {
		fetch("/src/data/shop-" + pg + ".json").then((res) => {
			if (res.ok) {
				res.json().then((data) => {
					let arr = this.state.shopData;
					data.data.list.map((item) => {
						arr.push(item);
					})
					this.setState({
						shopData:arr,
					})
				})
			}else {
				console.log("error");
			}
		});
	}
	sc() {
		let el = this.refs.el;
		let oPg = this.state.shopPg;
		if(el.scrollTop + el.clientHeight >= el.scrollHeight) {
			if(oPg >= 3) return;
			let nPg = oPg + 1;
			this.getData(nPg);
			this.setState({
				shopPg: nPg
			})
		}
	}
	render() {
		let shopData = this.state.shopData;
		return (
			<div className="shop" ref="el" onScroll={this.sc}>
                <ul className="category">
                    {this.state.category.map((item, index) => {
                        return <li key={index}>
                                    <img src={item.img} />
                                    <p>{item.name}</p>
                                </li>
                    })}
                </ul>
                <p>精彩推荐</p>
				{shopData.length !== 0 ? shopData.map((item, index) => {
                    return <ShopItem key={index} product={item}></ShopItem>
                }) : "" }
			</div>
		)
	}
}

export default Shop;