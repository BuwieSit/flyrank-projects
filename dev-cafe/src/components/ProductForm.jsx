import React, { useState } from 'react';
import { PlusCircle, AlertCircle, CheckCircle2, Coffee } from 'lucide-react';

export default function ProductForm({ onAddProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: 'Hot Coffee',
    description: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  const categories = ['Hot Coffee', 'Iced Coffee', 'Pastry'];

  // Validate a single field or all fields
  const validate = (data = formData) => {
    const newErrors = {};

    // Name Validation: 3 to 30 characters
    const trimmedName = data.name.trim();
    if (!trimmedName) {
      newErrors.name = 'Product name is required.';
    } else if (trimmedName.length < 3 || trimmedName.length > 30) {
      newErrors.name = 'Name must be between 3 and 30 characters.';
    }

    // Price Validation: positive number > 0.00
    const numPrice = parseFloat(data.price);
    if (!data.price || isNaN(numPrice)) {
      newErrors.price = 'Price is required.';
    } else if (numPrice <= 0) {
      newErrors.price = 'Price must be a positive number greater than $0.00.';
    }

    // Category Validation
    if (!data.category) {
      newErrors.category = 'Please select a category.';
    }

    // Description Validation: max 150 characters
    if (data.description.length > 150) {
      newErrors.description = 'Description cannot exceed 150 characters.';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Prevent negative numbers directly on input for price
    if (name === 'price' && parseFloat(value) < 0) {
      return;
    }

    const updatedForm = { ...formData, [name]: value };
    setFormData(updatedForm);

    // Live validation if field was touched
    if (touched[name]) {
      const validationErrors = validate(updatedForm);
      setErrors(prev => ({
        ...prev,
        [name]: validationErrors[name] || ''
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const validationErrors = validate();
    setErrors(prev => ({
      ...prev,
      [name]: validationErrors[name] || ''
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({
      name: true,
      price: true,
      category: true,
      description: true
    });

    const validationErrors = validate();
    setErrors(validationErrors);

    // Block submission if there are validation errors
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    // Construct valid payload
    const newProduct = {
      name: formData.name.trim(),
      price: parseFloat(formData.price),
      category: formData.category,
      description: formData.description.trim(),
      caffeine: formData.category === 'Pastry' ? 'None' : 'High',
      isVegan: true,
      sizes: [
        { label: 'Standard', modifier: 0 }
      ]
    };

    // Callback function
    if (typeof onAddProduct === 'function') {
      onAddProduct(newProduct);
    }

    // Reset inputs
    setFormData({
      name: '',
      price: '',
      category: 'Hot Coffee',
      description: '',
    });
    setErrors({});
    setTouched({});

    // Success feedback
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);
  };

  const descLength = formData.description.length;
  const isDescOverLimit = descLength > 150;

  return (
    <div className="max-w-2xl mx-auto my-12 rounded-2xl bg-slate-900/40 border border-slate-800/90 p-6 sm:p-8 shadow-xl text-slate-100">
      
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-800/80">
        <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
          <Coffee className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white tracking-tight">Add New Coffee Product</h3>
          <p className="text-xs text-slate-400">Expand the Dev Cafe menu with custom beverages or pastries.</p>
        </div>
      </div>

      {/* Success Notification */}
      {isSuccess && (
        <div className="mb-6 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center space-x-2">
          <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
          <span>Product successfully added to the menu!</span>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        
        {/* Name & Price Grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          
          {/* Product Name */}
          <div>
            <label htmlFor="product-name" className="text-xs font-semibold text-slate-300 block mb-1.5">
              Product Name <span className="text-amber-400">*</span>
            </label>
            <input
              id="product-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="e.g. Docker Dark Roast"
              className={`w-full bg-slate-950 border rounded-xl px-3.5 py-2.5 text-xs text-slate-200 placeholder-slate-500 transition-colors focus:outline-none ${
                errors.name
                  ? 'border-rose-500/80 focus:border-rose-500'
                  : 'border-slate-800/90 focus:border-amber-400'
              }`}
            />
            {errors.name && (
              <div className="flex items-center space-x-1 text-rose-400 text-[11px] font-mono mt-1.5">
                <AlertCircle className="w-3 h-3 flex-shrink-0" />
                <span>{errors.name}</span>
              </div>
            )}
          </div>

          {/* Price */}
          <div>
            <label htmlFor="product-price" className="text-xs font-semibold text-slate-300 block mb-1.5">
              Price ($ USD) <span className="text-amber-400">*</span>
            </label>
            <input
              id="product-price"
              type="number"
              name="price"
              step="0.01"
              min="0.01"
              value={formData.price}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="4.95"
              className={`w-full bg-slate-950 border rounded-xl px-3.5 py-2.5 text-xs text-slate-200 placeholder-slate-500 transition-colors focus:outline-none ${
                errors.price
                  ? 'border-rose-500/80 focus:border-rose-500'
                  : 'border-slate-800/90 focus:border-amber-400'
              }`}
            />
            {errors.price && (
              <div className="flex items-center space-x-1 text-rose-400 text-[11px] font-mono mt-1.5">
                <AlertCircle className="w-3 h-3 flex-shrink-0" />
                <span>{errors.price}</span>
              </div>
            )}
          </div>

        </div>

        {/* Category Dropdown */}
        <div>
          <label htmlFor="product-category" className="text-xs font-semibold text-slate-300 block mb-1.5">
            Category <span className="text-amber-400">*</span>
          </label>
          <select
            id="product-category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full bg-slate-950 border border-slate-800/90 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-amber-400"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          {errors.category && (
            <div className="flex items-center space-x-1 text-rose-400 text-[11px] font-mono mt-1.5">
              <AlertCircle className="w-3 h-3 flex-shrink-0" />
              <span>{errors.category}</span>
            </div>
          )}
        </div>

        {/* Description Textarea */}
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label htmlFor="product-description" className="text-xs font-semibold text-slate-300">
              Description
            </label>
            {/* Live Character Counter */}
            <span
              className={`text-[11px] font-mono ${
                isDescOverLimit
                  ? 'text-rose-400 font-bold'
                  : descLength > 120
                  ? 'text-amber-400'
                  : 'text-slate-500'
              }`}
            >
              {descLength}/150
            </span>
          </div>

          <textarea
            id="product-description"
            name="description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Brief product notes, origin details, or ingredients..."
            className={`w-full bg-slate-950 border rounded-xl px-3.5 py-2.5 text-xs text-slate-200 placeholder-slate-500 transition-colors focus:outline-none ${
              errors.description
                ? 'border-rose-500/80 focus:border-rose-500'
                : 'border-slate-800/90 focus:border-amber-400'
            }`}
          ></textarea>
          {errors.description && (
            <div className="flex items-center space-x-1 text-rose-400 text-[11px] font-mono mt-1.5">
              <AlertCircle className="w-3 h-3 flex-shrink-0" />
              <span>{errors.description}</span>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 px-4 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-md flex items-center justify-center space-x-2"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Add Product to Menu</span>
        </button>

      </form>

    </div>
  );
}
