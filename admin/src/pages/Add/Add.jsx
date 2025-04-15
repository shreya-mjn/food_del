import  { useState } from 'react'
import './Add.css'
import { assets, url } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = () => {


    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name: "",
        description: "",
        io: "",
        price: "",
        category: "Salad",
        mood:"Happy"
    });

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        if (!image) {
            toast.error('Image not selected');
            return null;
        }

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("io", data.io);
        formData.append("description", data.description);
        formData.append("price", Number(data.price));
        formData.append("category", data.category);
        formData.append("mood", data.mood);
        formData.append("image", image);
        const response = await axios.post(`${url}/api/food/add`, formData);
        if (response.data.success) {
            toast.success(response.data.message)
            setData({
                name: "",
                io:"",
                description: "",
                price: "",
                category: data.category,
                mood: "Happy" 
            })
            setImage(false);
        }
        else {
            toast.error(response.data.message)
        }
    }

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    return (
        <div className='add'>
            <form className='flex-col' onSubmit={onSubmitHandler}>
                <div className='add-img-upload flex-col'>
                    <p>Upload image</p>
                    <input onChange={(e) => { setImage(e.target.files[0]); e.target.value = '' }} type="file" accept="image/*" id="image" hidden />
                    <label htmlFor="image">
                        <img src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="" />
                    </label>
                </div>
                <div className='add-product-description flex-col'>
                    <p>Product cloudinary url</p>
                    <textarea name='io' onChange={onChangeHandler} value={data.io} type="text" rows={3} placeholder='give url here' required />
                </div>
                <div className='add-product-name flex-col'>
                    <p>Product name</p>
                    <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Type here' required />
                </div>
                <div className='add-product-description flex-col'>
                    <p>Product description</p>
                    <textarea name='description' onChange={onChangeHandler} value={data.description} type="text" rows={6} placeholder='Write content here' required />
                </div>
                <div className='add-category-price'>
                    <div className='add-category flex-col'>
                        <p>Product category</p>
                        <select name='category' onChange={onChangeHandler} >
                            <option value="Salad">Salad</option>
                            <option value="Indian Thali">Indian Thali</option>
                            <option value="Deserts">Deserts</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Cake">Cake</option>
                            <option value="Burger">Burger</option>
                            <option value="Ice Cream">Ice Cream</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Chinese">Chinese</option>
                            <option value="Drink">Drink</option>
                            <option value="pizza">Pizza</option>
                        </select>
                    </div>
                    <div className='add-price flex-col'>
                        <p>Product Price</p>
                        <input type="Number" name='price' onChange={onChangeHandler} value={data.price} placeholder='25' />
                    </div>
                </div>

                {/* Add mood dropdown */}
                <div className="add-mood flex-col">
                    <p>Select Mood</p>
                    <select name="mood" onChange={onChangeHandler} value={data.mood} className='select-btn'>
                        <option value="Happy">Happy</option>
                        <option value="Sad">Sad</option>
                        <option value="Relaxed">Relaxed</option>
                        <option value="Stressed">Stressed</option>
                        <option value="Exhausted">Exhausted</option>
                        <option value="Confused">Confused</option>
                       
                        {/* Add other moods as needed */}
                    </select>
                </div>
                <button type='submit' className='add-btn' >ADD</button>
            </form>
        </div>
    )
}

export default Add
