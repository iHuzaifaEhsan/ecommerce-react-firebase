import React, { useEffect, useState } from 'react'
import MyContext from "./MyContext";
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, QuerySnapshot, setDoc, Timestamp } from 'firebase/firestore'
import { toast } from 'react-toastify';
import { fireDB } from '../../firebase/FirebaseConfig'

const MyState = (props) => {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "rgb(17, 24, 39)"
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white"
    }
  }
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState({
    title: "",
    price: "",
    imageUrl: "",
    category: "",
    description: "",
    time: Timestamp.now(),
    date: new Date().toLocaleDateString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )
  });
  const addProduct = async () => {
    if (products.title == "" || products.price == "" || products.imageUrl == "" || products.category == "" || products.description == "") {
      return toast.error("All fields are required")
    }
    setLoading(true)
    try {
      const productRef = collection(fireDB, 'products');
      await addDoc(productRef, products)
      toast.success("Product Added Successfully")
      getProductData();
      setTimeout(() => {
        window.location.href = ('/dashboard')
      }, 800);
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  const [product, setProduct] = useState([]);
  const getProductData = async () => {
    setLoading(true)
    try {
      const q = query(
        collection(fireDB, 'products'),
        orderBy('time')
      )
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productArray = [];
        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id })
        });
        setProduct(productArray)
        setLoading(false)
      })
      return () => data;
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getProductData()
  }, [])

  const editHandle = (item) => {
    setProducts(item)
  }

  const updateProduct = async () => {
    setLoading(true)
    try {
      await setDoc(doc(fireDB, "products", products.id), products);
      toast.success("Product Updated Successfully")
      setTimeout(() => {
        window.location.href = '/dashboard'
      }, 800);
      getProductData();
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  const deleteProduct = async (item) => {
    setLoading(true)
    try {
      await deleteDoc(doc(fireDB, 'products', item.id));
      toast.success("Product Deleted Successfully")
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }



  return (
    <MyContext.Provider value={{ mode, toggleMode, loading, setLoading, products, setProducts, addProduct, product, editHandle, updateProduct, deleteProduct }}>
      {props.children}
    </MyContext.Provider>
  )
}

export default MyState