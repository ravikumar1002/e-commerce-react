import "./profile.css"

const ProfilePage = () => {

    return (
        <main>
            <div class="modal-container  logout-position">
                <div class="logout-wrapper flex-col ">
                    <div>
                        <h2 class="text-center">Accounts Details</h2>
                    </div>
                    <div class="flex-col profile-user-details">
                        <p> <span> Name :</span>  Customer</p>
                        <p> <span> phone :</span> 256256256 </p>
                        <p> <span> Address :</span> Web</p>
                        <p> <span> Email :</span> Webduniya@shop.com</p>
                    </div>
                    <div>
                        <button class="btn btn-primary">
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default ProfilePage

