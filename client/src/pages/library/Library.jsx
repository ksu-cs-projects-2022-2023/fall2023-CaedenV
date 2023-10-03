import LibBooks from "../../components/bookWithDesc/LibBooks"
import OwnedBook from "../../components/ownedBook/OwnedBook"
import "./library.css"

export default function Library() {
    return (
        <div className="library">
            <label className="libTitle">My Library</label>
            <div className="libWrapper">
                <div className="ownWrapper">
                    <label className="ownTitle">Owned</label>
                    <ul className="ownList">
                        <li><OwnedBook /></li>
                        <li><OwnedBook /></li>
                        <li><OwnedBook /></li>
                        <li><OwnedBook /></li>
                        <li><OwnedBook /></li>
                        <li><OwnedBook /></li>
                        <li><OwnedBook /></li>
                        <li><OwnedBook /></li>
                        <li><OwnedBook /></li>
                        <li><OwnedBook /></li>
                    </ul>
                </div>
                <div className="wishWrapper">
                    <label className="wishTitle">Wishlist</label>
                    <ul className="wishList">
                        <li><LibBooks /></li>
                        <li><LibBooks /></li>
                        <li><LibBooks /></li>
                        <li><LibBooks /></li>
                        <li><LibBooks /></li>
                        <li><LibBooks /></li>
                        <li><LibBooks /></li>
                        <li><LibBooks /></li>
                        <li><LibBooks /></li>
                        <li><LibBooks /></li>
                        <li><LibBooks /></li>
                        <li><LibBooks /></li>
                        <li><LibBooks /></li>
                        <li><LibBooks /></li>
                        <li><LibBooks /></li>
                        <li><LibBooks /></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}
