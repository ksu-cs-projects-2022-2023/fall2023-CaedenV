namespace WeReaderApp
{
    partial class uxStore
    {
        /// <summary> 
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary> 
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Component Designer generated code

        /// <summary> 
        /// Required method for Designer support - do not modify 
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.uxStoreItemsLB = new System.Windows.Forms.ListBox();
            this.SuspendLayout();
            // 
            // uxStoreItemsLB
            // 
            this.uxStoreItemsLB.BackColor = System.Drawing.Color.Ivory;
            this.uxStoreItemsLB.Dock = System.Windows.Forms.DockStyle.Fill;
            this.uxStoreItemsLB.Font = new System.Drawing.Font("Cambria", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.uxStoreItemsLB.FormattingEnabled = true;
            this.uxStoreItemsLB.ItemHeight = 19;
            this.uxStoreItemsLB.Location = new System.Drawing.Point(0, 0);
            this.uxStoreItemsLB.Name = "uxStoreItemsLB";
            this.uxStoreItemsLB.Size = new System.Drawing.Size(987, 534);
            this.uxStoreItemsLB.TabIndex = 0;
            // 
            // Store
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.Controls.Add(this.uxStoreItemsLB);
            this.Name = "Store";
            this.Size = new System.Drawing.Size(987, 534);
            this.ResumeLayout(false);

        }

        #endregion

        private ListBox uxStoreItemsLB;
    }
}
