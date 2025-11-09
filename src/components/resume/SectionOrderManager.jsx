import React from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { GripVertical, ChevronDown, Code, Briefcase, Globe, Wrench, Award } from 'lucide-react';

const SECTION_CONFIG = {
  education: { name: 'Education', icon: <Code size={20} /> },
  experience: { name: 'Experience', icon: <Briefcase size={20} /> },
  projects: { name: 'Projects', icon: <Globe size={20} /> },
  skills: { name: 'Skills', icon: <Wrench size={20} /> },
  certifications: { name: 'Certifications and Achievements', icon: <Award size={20} /> }
};

const SectionOrderManager = ({ sectionOrder, setSectionOrder, isOpen, setIsOpen }) => {
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(sectionOrder);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setSectionOrder(items);
  };

  if (!isOpen) {
    return (
      <div 
        className="mb-6 overflow-hidden"
        style={{
          backgroundColor: 'var(--color-surface)',
          borderRadius: '1.25rem',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
        }}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="w-full flex justify-between items-center text-left font-bold text-lg"
          style={{ 
            color: 'var(--color-foreground)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            backgroundColor: 'transparent',
            padding: '1.5rem 1.25rem',
            borderRadius: '1.25rem',
            border: 'none',
            outline: 'none'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-surface-secondary)';
            e.currentTarget.parentElement.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.15)';
            e.currentTarget.parentElement.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.parentElement.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
            e.currentTarget.parentElement.style.transform = 'translateY(0)';
          }}
        >
          <div className="flex items-center gap-3">
            <div 
              className="flex-shrink-0 p-2 rounded-lg" 
              style={{ 
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                transition: 'all 0.3s'
              }}
            >
              <GripVertical size={24} style={{ color: 'var(--color-primary)' }} />
            </div>
            <span className="truncate">Customize Section Order</span>
          </div>
          <div 
            className="flex-shrink-0"
            style={{
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '0.5rem',
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <ChevronDown
              size={22}
              strokeWidth={2.5}
              style={{
                color: 'var(--color-primary)',
                transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            />
          </div>
        </button>
      </div>
    );
  }

  return (
    <div 
      className="mb-6 overflow-hidden"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderRadius: '1.25rem',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
      }}
    >
      <button
        onClick={() => setIsOpen(false)}
        className="w-full flex justify-between items-center text-left font-bold text-lg"
        style={{ 
          color: 'var(--color-foreground)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          backgroundColor: 'transparent',
          padding: '1.5rem 1.25rem',
          borderTopLeftRadius: '1.25rem',
          borderTopRightRadius: '1.25rem',
          border: 'none',
          outline: 'none'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--color-surface-secondary)';
          e.currentTarget.parentElement.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.15)';
          e.currentTarget.parentElement.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.parentElement.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
          e.currentTarget.parentElement.style.transform = 'translateY(0)';
        }}
      >
        <div className="flex items-center gap-3">
          <div 
            className="flex-shrink-0 p-2 rounded-lg" 
            style={{ 
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              transition: 'all 0.3s'
            }}
          >
            <GripVertical size={24} style={{ color: 'var(--color-primary)' }} />
          </div>
          <span className="truncate">Customize Section Order</span>
        </div>
        <div 
          className="flex-shrink-0"
          style={{
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '0.5rem',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <ChevronDown
            size={22}
            strokeWidth={2.5}
            style={{
              color: 'var(--color-primary)',
              transform: 'rotate(180deg)',
              transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          />
        </div>
      </button>
      
      <div 
        style={{ 
          backgroundColor: 'var(--color-surface)',
          borderBottomLeftRadius: '1.25rem',
          borderBottomRightRadius: '1.25rem',
          padding: '1.75rem 1.25rem'
        }}
      >
        <p className="text-sm mb-4" style={{ color: 'var(--color-foreground-secondary)', fontWeight: '500' }}>
          Drag and drop to reorder sections. This will change the order in your generated resume.
        </p>
        
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="sections">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-4">
                {sectionOrder.map((sectionId, index) => (
                  <Draggable key={sectionId} draggableId={sectionId} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`flex items-center gap-3 p-4 cursor-move transition-all ${
                          snapshot.isDragging ? 'opacity-60 transform rotate-2 shadow-lg z-1000' : ''
                        }`}
                        style={{
                          backgroundColor: 'var(--color-surface)',
                          border: '2px solid var(--color-border)',
                          borderRadius: '0.75rem',
                          ...provided.draggableProps.style
                        }}
                        onMouseEnter={(e) => {
                          if (!snapshot.isDragging) {
                            e.currentTarget.style.backgroundColor = 'var(--color-surface-secondary)';
                            e.currentTarget.style.borderColor = 'var(--color-primary)';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!snapshot.isDragging) {
                            e.currentTarget.style.backgroundColor = 'var(--color-surface)';
                            e.currentTarget.style.borderColor = 'var(--color-border)';
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                          }
                        }}
                      >
                        <div 
                          className="flex-shrink-0"
                          style={{
                            width: '32px',
                            height: '32px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '0.5rem',
                            backgroundColor: 'rgba(59, 130, 246, 0.1)'
                          }}
                        >
                          <GripVertical size={18} style={{ color: 'var(--color-primary)' }} />
                        </div>
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div style={{ color: 'var(--color-primary)' }}>
                            {SECTION_CONFIG[sectionId]?.icon}
                          </div>
                          <span className="font-semibold text-base truncate" style={{ color: 'var(--color-foreground)' }}>
                            {SECTION_CONFIG[sectionId]?.name}
                          </span>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        
        <div 
          className="mt-4" 
          style={{ 
            padding: '1rem',
            borderRadius: '0.75rem',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.2)'
          }}
        >
          <p className="text-sm" style={{ color: 'var(--color-primary)', fontWeight: '500' }}>
            💡 <strong>Tip:</strong> The sections will appear in your resume in the exact order shown above.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionOrderManager;
