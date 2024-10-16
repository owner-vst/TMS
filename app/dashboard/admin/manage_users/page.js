import ManageUserForm from "@/app/components/Forms/ManageUserForm";
import Pagination from "@/app/components/misc/Pagination";

function Manage_users() {
  const users = [
    {
      id: "01",
      firstName: "Bobby",
      lastName: "Schol",
      name: "Mr. Bobby",
      email: "bobby@example.com",
      gender: "Male",
      dob: "1990-05-15",
      address: "123 Main St",
      phone: "123-456-7890",
      role: "Scholar",
      status: "Active"
    },
    {
      id: "02",
      firstName: "Chris",
      lastName: "Brown",
      name: "Chris Brown",
      email: "chris@example.com",
      gender: "Male",
      dob: "1988-07-21",
      address: "456 Oak St",
      phone: "987-654-3210",
      role: "Scholar",
      status: "Inactive"
    },
    // Add more users if needed
    {
      id: "03",
      firstName: "John",
      lastName: "Doe",
      name: "John Doe",
      email: "john@example.com",
      gender: "Male",
      dob: "1990-05-15",
      address: "123 Main St",
      phone: "123-456-7890",
      role: "User",
      status: "Active"
    },
    {
      id: "04",
      firstName: "Jane",
      lastName: "Smith",
      name: "Jane Smith",
      email: "jane@example.com",
      gender: "Female",
      dob: "1990-05-15",
      address: "123 Main St",
      phone: "123-456-7890",
      role: "User",
      status: "Active"
    },
    {
      id: "05",
      firstName: "Alice",
      lastName: "Johnson",
      name: "Alice Johnson",
      email: "alice@example.com",
      gender: "Female",
      dob: "1990-05-15",
      address: "123 Main St",
      phone: "123-456-7890",
      role: "User",
      status: "Active"
    }
  ];
  
  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className="row">
          {/* <div className="col-xl-6 col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Manage Users</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form>
                    <div className="row">
                      <div className="mb-3 col-md-6">
                        <label className="form-label">User Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter User Name"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="mb-3 col-md-6">
                        <label className="form-label">Role</label>
                        <select
                          id="inputState"
                          className="default-select form-control wide"
                          defaultValue="Choose Role"
                        >
                          <option>Choose Role</option>
                          <option>Admin</option>
                          <option>Scholar</option>
                          <option>User</option>
                        </select>
                      </div>
                      
                    </div>
                   
                    <button type="submit" className="btn btn-primary">
                      Edit User
                    </button>
                    
                  </form>
                </div>
              </div>
            </div>
          </div> */}
          <ManageUserForm />
          <div className="col-lg-12">
  <div className="card">
    <div className="card-header">
      <h4 className="card-title">List of Users</h4>
    </div>
    <div className="card-body">
      <div className="table-responsive">
        <table className="table table-responsive-md">
          <thead>
            <tr>
              <th style={{ width: 80 }}>
                <strong>ID</strong>
              </th>
              <th>
                <strong>FIRST NAME</strong>
              </th>
              <th>
                <strong>LAST NAME</strong>
              </th>
              <th>
                <strong>NAME</strong>
              </th>
              <th>
                <strong>EMAIL</strong>
              </th>
              <th>
                <strong>GENDER</strong>
              </th>
              <th>
                <strong>DOB</strong>
              </th>
              <th>
                <strong>ADDRESS</strong>
              </th>
              <th>
                <strong>PHONE</strong>
              </th>
              <th>
                <strong>ROLE</strong>
              </th>
              <th>
                <strong>STATUS</strong>
              </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>
                  <strong>{user.id}</strong>
                </td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.dob}</td>
                <td>{user.address}</td>
                <td>{user.phone}</td>
                <td>{user.role}</td>
                <td>{user.status}</td>
                <td>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-success light sharp"
                      data-bs-toggle="dropdown"
                    >
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect x={0} y={0} width={24} height={24} />
                          <circle fill="#000000" cx={5} cy={12} r={2} />
                          <circle fill="#000000" cx={12} cy={12} r={2} />
                          <circle fill="#000000" cx={19} cy={12} r={2} />
                        </g>
                      </svg>
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        Edit
                      </a>
                      <a className="dropdown-item" href="#">
                        Delete
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default Manage_users;
